import Image from "next/image";
import Link from "next/link";


const HeaderOne = () => {
    return (
      <header>
        <div className="flex justify-between items-center bg-amber-800 h-18 pr-80">
          {/* icono */}
            <div className="size-15">
                <Link href="#"><Image src="/img/logo.png" alt="LOGO" width={500} height={500}/></Link>
            </div>
            <nav className="text-white text-lg font-bold">
                <a className="pl-7" href="Nosotros.html">Nosotros</a>
                <a className="pl-7" href="/carta">Carta</a>
                <a className="pl-7" href="Promociones.html">Promociones</a>
                <a className="pl-7" href="Contactanos.html">Contactanos</a>
                <a className="pl-7" href="Reservas.html">Reservas</a>
          </nav>
        </div>
      </header>
    )
  }

  export default HeaderOne;

