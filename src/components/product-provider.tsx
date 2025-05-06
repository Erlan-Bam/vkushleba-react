"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ProductContextType = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <ProductContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
