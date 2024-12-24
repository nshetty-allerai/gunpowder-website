// components/ContentSquareScript.js
'use client';

import { useEffect } from 'react';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

const ContentSquareScript = () => {
  useEffect(() => {
    injectContentsquareScript({
      // siteId: "5248379", sankets id 
      siteId: "5250429", // correspondence id
      async: true, // Optional
      defer: false, // Optional
    });
  }, []);

  return null; // No UI component is rendered
};

export default ContentSquareScript;
