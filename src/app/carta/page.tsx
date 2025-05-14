


import ButtonCategorias from '@/components/ButtonCategorias';
import Sidebar from '@/components/Sidebar';
import ArrayOfProducts from '@/data/products';
import { montserrat } from '@/ui/fonts';
import Image from 'next/image';



export default function Home() {
    
    return (
    <main className="">
        
        <h1>Pagina de las cartas</h1>
        <ButtonCategorias/>
        <section className='flex w-full p-3.5'>
            <Sidebar/>
            <section className='w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {ArrayOfProducts.map((product) => (
                <div key={product.id} className='w-f p-2'>
                    <div className='relative rounded-xl overflow-hidden shadow-md group h-[350px]'>
                        <a href="#"><Image src={product.image} alt="plato" width={1000} height={1000} 
                        className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"'/></a>
                        <a href="#"><video  autoPlay muted loop playsInline src={product.video} 
                        className='z-10 absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300' ></video></a> 
                        <div className= {`${montserrat.className} antialiased z-20 absolute bottom-0.5 p-3
                         w-full  bg-linear-to-t from-black to-transparent text-amber-50`}>
                            <h3>{product.name}</h3>
                            <p className='mt-2.5'>Precio: <span>S/.{product.price}</span></p>
                        </div>
                    </div>
                </div>
            ))}


                

                

                
                
            </section>
        </section>
       
        

    </main>
);
}
