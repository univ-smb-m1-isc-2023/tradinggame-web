"use client";

import { Suspense, useEffect } from "react";
import PageOrderFetched from "./pageOrderfetched";

export function detailsorderPage() {
  useEffect(() => {
    // Vérifie si le token est vide
    const token = localStorage.getItem("token");
    if (token === "") {
      // Redirige vers la page d'accueil
      window.location.href = `/`;
    }
  }, []);
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PageOrderFetched />
      </Suspense>
    </>
  );
}

export default detailsorderPage;
