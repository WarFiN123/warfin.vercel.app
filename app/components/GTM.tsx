"use client"; // Mark this component as a client-side component

import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function GTM() {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);

  return null; // No UI component needed, just initialization
}
