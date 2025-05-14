import { Product } from "@/helpers/definition";

const ArrayOfProducts:Product[] = [
    {
    id: 1,
    name: "Pollo a la brasa",
    description: "Delicioso pollo a la brasa con papas fritas y ensalada",
    image: "/img/pla1.jpg",
    video:"/videos/Ceviche.mp4",
    price: 10.99,
    category: "Pollo",
    ingredients: [
        "Pollo",
        "Papas fritas",
        "Ensalada",
        "Salsa de ajo",
        "Salsa de soya"
    ],
    preparationTime: "30 minutos"
    },{
id: 2,
name: "Pescado a la brasa", 
description: "Delicioso pescado a la brasa con papas fritas y ensalada",
image: "/img/pla2.jpg",
video:"/videos/Ceviche.mp4",
price: 12.99,
category: "Pescado",
ingredients: [
    "Pescado",
    "Papas fritas",
    "Ensalada",
    "Salsa de ajo",
    "Salsa de soya" 
],
preparationTime: "30 minutos"  
    },
    {
id: 3,
name: "Cerdo a la brasa",
description: "Delicioso cerdo a la brasa con papas fritas y ensalada",
image: "/img/pla3.jpg",
video:"/videos/Ceviche.mp4",
price: 11.99,
category: "Cerdo",
ingredients: [
    "Cerdo",
    "Papas fritas",
    "Ensalada",
    "Salsa de ajo",
    "Salsa de soya"
],
preparationTime: "30 minutos"
    },  
    {
id: 4,
name: "Res a la brasa",
description: "Delicioso res a la brasa con papas fritas y ensalada",
image: "/img/pla4.jpg",
video:"/videos/Ceviche.mp4",
price: 13.99,
category: "Res",
ingredients: [
    "Res",
    "Papas fritas",
    "Ensalada",
    "Salsa de ajo",
    "Salsa de soya"
],
preparationTime: "30 minutos"
    },
    
]   

export default ArrayOfProducts;