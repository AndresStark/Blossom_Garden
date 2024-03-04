import { useState } from "react"

export default function NavBar() {
    const [subMenu,setSubMenu] = useState(false)

    const categories = [
        {
            id:0,
            value: "iglesia",
            label: "Iglesia"
        },
        {
            id:1,
            value: "cumpleaños",
            label: "Cumpleaños"
        },
        {
            id:2,
            value: "boda",
            label: "Bodas"
        },
        {
            id:3,
            value: "ramilletes",
            label: "Ramilletes"
        },
        {
            id:4,
            value: "aniversarios",
            label: "Aniversarios"
        },
        {
            id:5,
            value: "flores",
            label: "flores"
        }
]


    return(
        <section className="flex justify-around bg-green bg-opacity-50">
                <ul className="list-none w-full mx-[10%] flex justify-evenly items-center text-nowrap">
                    <li className="hover:bg-pink w-full h-full">Inicio</li>
                    <div onClick={() => setSubMenu(!subMenu)} className="relative hover:bg-pink w-full h-full">
                        <li>Tienda</li>
                        { subMenu &&
                            <div className="absolute z-10">
                            {categories.map((category) =>
                                            <h1 value={category.value} id={category.id} className="hover:bg-pink p-x-2">{category.label}</h1>
                                        )}
                            </div>
                        }
                    </div>
                    <li className="hover:bg-pink w-full h-full">Contactanos</li>
                    <li className="hover:bg-pink w-full h-full">Metodos de pago y envios</li>
                    <li className="hover:bg-pink w-full h-full">Sobre nosotros</li>
                </ul>
            <button className="bg-pink px-4 py-2 my-2  rounded whitespace-nowrap">Iniciar sesión</button>


        </section>
    )
}