import { createContext, useContext, useState } from "react";

interface MaterialItem {
  material: string;
  quantity: number;
}

interface MaterialsContextType {
  materials: MaterialItem[];
  addMaterial: (material: MaterialItem) => void;
  updateMaterial: (name: string, quantity: number) => void;
}

const MaterialsContext = createContext<MaterialsContextType | undefined>(undefined);

export const MaterialsProvider = ({ children }: { children: React.ReactNode }) => {
  const [materials, setMaterials] = useState<MaterialItem[]>([]);

  const addMaterial = (material: MaterialItem) => {
    const a = materials.find((el) => el.material === material.material);
    if (!a) {
        setMaterials((prev) => [...prev, material]);
    }
  };

  const updateMaterial = (name: string, quantity: number) => {
    setMaterials((prev) => prev.map((item) => (item.material === name ? { ...item, quantity } : item)));
  };
  return (
    <MaterialsContext.Provider value={{ materials, addMaterial, updateMaterial }}>{children}</MaterialsContext.Provider>
  );
};

export const useMaterials = () => {
  const context = useContext(MaterialsContext);
  if (!context) {
    throw new Error("useMaterials must be used within a MaterialsProvider");
  }
  return context;
};
