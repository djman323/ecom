// src/auth-context.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, db } from "./firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          setUser({ ...userSnap.data(), uid: user.uid });
        } else {
          // Create a new document in Firestore
          await setDoc(userDoc, {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastLogin: new Date(),
          });
          setUser(user);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      // Fetch and set user data if necessary
      const userDoc = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDoc);
      if (userSnap.exists()) {
        setUser({ ...userSnap.data(), uid: user.uid });
      }
    } catch (error) {
      console.error("Login error: ", error.message);
      throw error;
    }
  };

  const register = async (email, password, displayName) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      // Set display name
      await updateProfile(user, { displayName });

      // Save user data in Firestore
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, {
        displayName,
        email: user.email,
        photoURL: user.photoURL || "",
        lastLogin: new Date(),
      });

      setUser(user); // Set user state after registration
    } catch (error) {
      console.error("Registration error: ", error.message);
      throw error;
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data in Firestore
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: new Date(),
      });

      setUser(user); // Set user state after Google login
    } catch (error) {
      console.error("Google login error: ", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state on logout
    } catch (error) {
      console.error("Logout error: ", error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, googleLogin, logout, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
