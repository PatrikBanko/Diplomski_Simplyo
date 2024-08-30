// SimplifiedTextProvider.tsx
import React, { useState, ReactNode } from "react";
import { SimplifiedTextContext } from "./SimplificiraniTekstContex"; // Import the context

// Define the provider component
export const SimplifiedTextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [simplifiedTexts, setSimplifiedTexts] = useState<string[]>([]);

  const addSimplifiedText = (text: string) => {
    setSimplifiedTexts((prevTexts) => {
      // Keep only the last two texts
      return [text, ...prevTexts].slice(0, 2);
    });
  };

  return (
    <SimplifiedTextContext.Provider
      value={{ simplifiedTexts, addSimplifiedText }}
    >
      {children}
    </SimplifiedTextContext.Provider>
  );
};
