'use strict'
'use client'
import Sidebar from '@/components/Sidebar';
import ArrayOfProducts from '@/data/products';
import ButtonCategorias from '@/components/ButtonCategorias';

import { useState } from 'react';
import TargetProduct from './TargetProduct';
import { categorias, filtros } from '@/data/common';

// import { categorias } from '@/data/common';

const ShopWithSidebar = ()=> {
    const [FiltroProduct, setFiltroProduct] = useState <string | null>(null);
    const [CateProduct, setCateProduct] = useState <string | null>(categorias[0].name);
    const [ productos,setproductos ] = useState(ArrayOfProducts)
    // const [ text,setText ] = useState('')
//    const filterProductos:ProductosList = FiltroProduct?productos.filter((producto) =>  producto.filtro === FiltroProduct ): productos;

//    const filCateProductos:ProductosList = FiltroProduct?productos.filter((producto) =>  producto.filtro === CateProduct ): productos;

   const FilCateProducts=( categoria:string )=>{
        setCateProduct(categoria)
        setFiltroProduct(filtros[0].name)
        
        const productosFiltrados = ArrayOfProducts.filter((producto) =>  producto.category === categoria)
        setproductos(productosFiltrados)
   }

   const filterProductos=( filtro:string )=>{
        if(!CateProduct) return;

        const FilterCateProductos = ArrayOfProducts.filter((producto) =>  producto.category === CateProduct)

        const productosFiltrados = FilterCateProductos.filter((producto) =>  producto.filtro.includes(filtro))
        setproductos(productosFiltrados)
        // setText(filtro)
        setFiltroProduct(filtro)
   }

    return (
    <>  
    <ButtonCategorias FilCateProducts={FilCateProducts}/>
    <h2>{FiltroProduct}</h2>
    <section className='flex w-full p-3.5'>
        <Sidebar setFiltroProduct={filterProductos}/>
        <TargetProduct filterProductos={productos}/>
            
    </section>
    </>
  )
}

export default ShopWithSidebar
