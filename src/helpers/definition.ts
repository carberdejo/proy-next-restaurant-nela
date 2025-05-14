 export type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    video: string;
    price: number;
    category: string;
    ingredients: string[];
    preparationTime: string;
    filtro:string[];
    
}

export type dataCategoria = {
  id: number;
  name: string;
  description: string;
  image: string;}
  
export type Categoria = dataCategoria[];
export type ProductosList = Product[];


export type Filters = {
  id: number; 
  name: string;
}  
export type SidebarProps = {
  // setFiltroProduct: React.Dispatch<React.SetStateAction<string>>;
  setFiltroProduct: (filtro: string) => void;
};

export type ProductoProps = {
  filterProductos: ProductosList;
};
export type CateProps = {
  FilCateProducts: (categoria: string) => void;
};