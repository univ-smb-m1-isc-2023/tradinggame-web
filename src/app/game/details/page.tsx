"use client";


import { Suspense } from "react";
import ActionsDetails from "./actionDetails"
export function detailsPage() {
  // Assuming setOpenConfigurator and useMaterialTailwindController are being used somewhere
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>

     <ActionsDetails/>
     </Suspense>

    </>
  );
}


export default detailsPage;
