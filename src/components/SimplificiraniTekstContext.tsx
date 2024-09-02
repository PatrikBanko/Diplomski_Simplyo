import React, { createContext, useContext, useState, ReactNode } from "react";

interface SimplifiedTextContextType {
  simplifiedTexts: string[];
  addSimplifiedText: (text: string) => void;
}

export const SimplifiedTextContext = createContext<
  SimplifiedTextContextType | undefined
>(undefined);

export const useSimplifiedTextContext = () => {
  const context = useContext(SimplifiedTextContext);
  if (!context) {
    throw new Error(
      "useSimplifiedTextContext must be used within a SimplifiedTextProvider"
    );
  }
  return context;
};

export const SimplifiedTextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [simplifiedTexts, setSimplifiedTexts] = useState<string[]>([]);

  const addSimplifiedText = (text: string) => {
    setSimplifiedTexts((prevTexts) => {
      const updatedTexts = [text, ...prevTexts].slice(0, 2);
      return updatedTexts;
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
