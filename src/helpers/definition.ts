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
}

type dataCategoria = {
  id: number;
  name: string;
  description: string;
  image: string;}
  
export type Categoria = dataCategoria[];

