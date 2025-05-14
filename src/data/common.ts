
import { Categoria, Filters } from "@/helpers/definition";




export const categorias:Categoria = [
{id: 1, name: "Pollo", description: "Delicioso pollo a la brasa", image: "/img/icon_blanco-1.png"},
{id: 2, name: "Pescado", description: "Delicioso pescado a la brasa", image: "/img/icon_blanco-2.png"},
{id: 3, name: "Carne", description: "Delicioso cerdo a la brasa", image: "/img/icon_blanco-3.png"},
{id: 4, name: "Pasta", description: "Delicioso res a la brasa", image: "/img/icon_blanco-4.png"},
{id: 5, name: "Bebida", description: "Delicioso vegetariano a la brasa", image: "/img/icon_blanco-5.png"},]

export const filtros:Filters[] = [
    {id: 1, name: "Todos"},
    {id: 2, name: "Populares"},
    {id: 3, name: "Baratos"},
    {id: 4, name: "Nuevos"},
    {id: 5, name: "Recomendados"},
    {id: 6, name: "Ofertas"}]