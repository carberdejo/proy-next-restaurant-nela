import { Product } from "@/helpers/definition";

const ArrayOfProducts: Product[] = [
    {
        id: 1,
        name: "Pollo a la brasa",
        description: "Delicioso pollo a la brasa con papas fritas y ensalada",
        image: "/img/pla1.jpg",
        video: "/videos/Ceviche.mp4",
        price: 10.99,
        category: "Pollo",
        ingredients: [
            "Pollo",
            "Papas fritas",
            "Ensalada",
            "Salsa de ajo",
            "Salsa de soya"
        ],
        preparationTime: "30 minutos",
        filtro: ["Todos", "Populares", "Ofertas"]
    },
    {
        id: 2,
        name: "Pescado a la brasa",
        description: "Delicioso pescado a la brasa con papas fritas y ensalada",
        image: "/img/pla2.jpg",
        video: "/videos/Ceviche.mp4",
        price: 12.99,
        category: "Pescado",
        ingredients: [
            "Pescado",
            "Papas fritas",
            "Ensalada",
            "Salsa de ajo",
            "Salsa de soya"
        ],
        preparationTime: "30 minutos",
        filtro: ["Todos", "Populares", "Recomendados"]
    },
    {
        id: 3,
        name: "Cerdo a la brasa",
        description: "Delicioso cerdo a la brasa con papas fritas y ensalada",
        image: "/img/pla3.jpg",
        video: "/videos/Ceviche.mp4",
        price: 11.99,
        category: "Carne",
        ingredients: [
            "Cerdo",
            "Papas fritas",
            "Ensalada",
            "Salsa de ajo",
            "Salsa de soya"
        ],
        preparationTime: "30 minutos",
        filtro: ["Todos", "Baratos", "Ofertas"]
    },
    {
        id: 4,
        name: "Res a la brasa",
        description: "Delicioso res a la brasa con papas fritas y ensalada",
        image: "/img/pla4.jpg",
        video: "/videos/Ceviche.mp4",
        price: 13.99,
        category: "Carne",
        ingredients: [
            "Res",
            "Papas fritas",
            "Ensalada",
            "Salsa de ajo",
            "Salsa de soya"
        ],
        preparationTime: "30 minutos",
        filtro: ["Todos", "Nuevos", "Recomendados"]
    },
    {
        id: 5,
        name: "Ceviche de pescado",
        description: "Fresco ceviche de pescado con limón y especias",
        image: "/img/pla5.jpg",
        video: "/videos/Ceviche.mp4",
        price: 9.99,
        category: "Pescado",
        ingredients: [
            "Pescado",
            "Limón",
            "Cebolla",
            "Ají",
            "Cilantro"
        ],
        preparationTime: "20 minutos",
        filtro: ["Todos", "Baratos", "Ofertas"]
    },
    {
        id: 6,
        name: "Lomo saltado",
        description: "Clásico lomo saltado con papas fritas y arroz",
        image: "/img/pla6.jpg",
        video: "/videos/LomoSaltado.mp4",
        price: 14.99,
        category: "Carne",
        ingredients: [
            "Res",
            "Cebolla",
            "Tomate",
            "Papas fritas",
            "Arroz"
        ],
        preparationTime: "25 minutos",
        filtro: ["Todos", "Populares", "Recomendados"]
    },
    {
        id: 7,
        name: "Ají de gallina",
        description: "Cremoso ají de gallina con arroz y aceitunas",
        image: "/img/pla6.jpg",
        video: "/videos/AjiDeGallina.mp4",
        price: 8.99,
        category: "Pollo",
        ingredients: [
            "Pollo",
            "Ají amarillo",
            "Leche",
            "Pan",
            "Arroz"
        ],
        preparationTime: "35 minutos",
        filtro: ["Todos", "Baratos", "Ofertas"]
    },
    {
        id: 8,
        name: "Tallarines verdes",
        description: "Tallarines con salsa de albahaca y queso parmesano",
        image: "/img/pla8.jpg",
        video: "/videos/TallarinesVerdes.mp4",
        price: 10.49,
        category: "Pasta",
        ingredients: [
            "Tallarines",
            "Albahaca",
            "Queso parmesano",
            "Leche",
            "Aceite de oliva"
        ],
        preparationTime: "30 minutos",
        filtro: ["Todos", "Nuevos", "Recomendados"]
    }
];


export default ArrayOfProducts;