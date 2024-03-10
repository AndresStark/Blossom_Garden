import { useState } from "react"

export default function NavBar() {
    const [subMenu, setSubMenu] = useState(false)

    const categories = [
        {
            id: 0,
            value: "iglesia",
            label: "Iglesia"
        },
        {
            id: 1,
            value: "cumpleaños",
            label: "Cumpleaños"
        },
        {
            id: 2,
            value: "boda",
            label: "Bodas"
        },
        {
            id: 3,
            value: "ramilletes",
            label: "Ramilletes"
        },
        {
            id: 4,
            value: "aniversarios",
            label: "Aniversarios"
        },
        {
            id: 5,
            value: "flores",
            label: "flores"
        }
    ]

    return (
        <section className="flex bg-white bg-opacity-50 px-10">
            <ul className="list-none w-full flex items-center text-nowrap gap-10">
                <li className="hover:bg-pink h-full px-6 flex items-center">Inicio</li>
                <div onClick={() => setSubMenu(!subMenu)} className="relative hover:bg-pink h-full">
                    <li className={`hover:bg-pink ${subMenu && 'bg-pink'} h-full px-6 flex items-center`}>Tienda</li>
                    {subMenu &&
                        <div className="absolute z-10 bg-white ">
                            {categories.map((category) =>
                                <h1 value={category.value} id={category.id} className="hover:bg-pink px-6 flex items-center py-2">{category.label}</h1>
                            )}
                        </div>
                    }
                </div>
                <li className="hover:bg-pink h-full px-6 flex items-center">Contactanos</li>
                <li className="hover:bg-pink h-full px-6 flex items-center">Metodos de pago y envios</li>
                <li className="hover:bg-pink h-full px-6 flex items-center">Sobre nosotros</li>
            </ul>
            <button className="bg-pink text-white px-6 flex items-center py-2 my-2  rounded whitespace-nowrap">Iniciar sesión</button>
        </section>
    )
}