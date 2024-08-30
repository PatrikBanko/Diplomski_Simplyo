// SimplifiedTextContext.tsx
import { createContext, useContext } from "react";

// Define context type
interface SimplifiedTextContextProps {
  simplifiedTexts: string[];
  addSimplifiedText: (text: string) => void;
}

// Create the context
export const SimplifiedTextContext = createContext<
  SimplifiedTextContextProps | undefined
>(undefined);

// Hook to use the context
export const useSimplifiedTextContext = () => {
  const context = useContext(SimplifiedTextContext);
  if (!context) {
    throw new Error(
      "useSimplifiedTextContext must be used within a SimplifiedTextProvider"
    );
  }
  return context;
};
