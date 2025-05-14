import { categorias } from '@/data/common'
import Image from 'next/image';
export default function ButtonCategorias() {
  return (
    <section className='w-full h-40 flex justify-around items-center p-15'>
        {categorias.map((categoria) => (
            <div key={categoria.id} className='flex flex-col items-center'>
            <div
            className='w-16 h-16 flex items-center justify-center bg-amber-800 rounded-full shadow-lg 
                    transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-amber-600' >
            <Image
                src={categoria.image} alt={categoria.name}
                width={40} height={40}
                className='object-contain'/>
            </div>
            <p className='mt-2 text-sm font-medium'>{categoria.name}</p>
        </div>
    ))}
    </section>
  )
}
