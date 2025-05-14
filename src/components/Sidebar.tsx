import { categorias } from '@/data/common'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className='w-64 p-4 border-r border-gray-200 space-y-8'>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">CATEGORIAS</h2>
          <span className="text-xl font-bold">–</span>
        </div>
        <div className="h-0.5 bg-blue-500 my-2" />
        <form className="space-y-3 text-sm text-gray-700">
          {categorias.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                // checked={categoriaSeleccionada === cat}
                // onChange={() => setCategoriaSeleccionada(cat)}
                className="accent-blue-500"
              />
              {cat.name}
            </label>
          ))}
        </form>
    </aside>
  )
}
