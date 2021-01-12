import { createContext } from "react";
import { DBProducts } from "./interfaces";
import { DBCategories } from "./interfaces";

export const DBProductsContext = createContext<DBProducts[] | []>([]);
export const DBCategoriesContext = createContext<DBCategories[] | []>([]);
