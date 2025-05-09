import { createContext, useContext, useState } from "react";

interface MaterialItem {
  material: string;
  quantity: number;
}

interface MaterialsContextType {
  materials: MaterialItem[];
  addMaterial: (material: MaterialItem) => void;
  updateMaterial: (name: string, quantity: number) => void;
  setMaterials: React.Dispatch<React.SetStateAction<MaterialItem[]>>;
}

const MaterialsContext = createContext<MaterialsContextType | undefined>(undefined);

export const MaterialsProvider = ({ children }: { children: React.ReactNode }) => {
  const [materials, setMaterials] = useState<MaterialItem[]>([]);

  const addMaterial = (material: MaterialItem) => {
    const existingMaterial = materials.find((el) => el.material === material.material);
    if (!existingMaterial) {
        setMaterials((prev) => [...prev, material]);
    }
  };

  const updateMaterial = (name: string, quantity: number) => {
    setMaterials((prev) => prev.map((item) => (item.material === name ? { ...item, quantity } : item)).filter(item => item.quantity !== 0));
  };
  return (
    <MaterialsContext.Provider value={{ materials, addMaterial, updateMaterial, setMaterials }}>{children}</MaterialsContext.Provider>
  );
};

export const useMaterials = () => {
  const context = useContext(MaterialsContext);
  if (!context) {
    throw new Error("useMaterials должен всегда находиться внутри MaterialsProvider");
  }
  return context;
};
