"use client"; // Mark this component as a client-side component

import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function GTM() {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    if (gtmId) {
      TagManager.initialize({ gtmId }); // Initialize only if gtmId is defined
    } else {
      console.warn("GTM ID is not defined");
    }
  }, []);

  return null; // No UI component needed, just initialization
}
