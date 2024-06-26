"use client";

import router from "next/router";
import Gamelist from "./gamelist";
import { Suspense, useEffect } from "react";

export default function gamelistPage() {
  useEffect(() => {
    // Vérifie si le token est vide
    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
      if (!token) {
        token = "";
      }
    } else {
      token = "";
    }
    if (token === "") {
      // Redirige vers la page d'accueil
      window.location.href = `/`;
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Gamelist />
      </Suspense>
    </>
  );
}
