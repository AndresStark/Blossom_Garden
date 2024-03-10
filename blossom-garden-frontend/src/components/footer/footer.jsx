import { IoRose } from "react-icons/io5";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-green flex flex-col gap-10 p-10 divide-y divide-dark-green">
            <div className="grid grid-cols-3">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-center">
                        <IoRose size={40} className="text-dark-green" />
                        <h6>Blossom Garden</h6>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="flex gap-3">
                            <FaWhatsapp size={20} />
                            <h6>+503 xxx xxx</h6>
                        </span>
                        <span className="flex gap-3">
                            <FaInstagram size={20} />
                            <h6>blossom_garden</h6>
                        </span>
                        <span className="flex gap-3">
                            <AiOutlineFacebook size={20} />
                            <h6>Blossom Garden SV</h6>
                        </span>
                    </div>
                </div>
                <ul className="list-none w-full flex flex-col ju text-nowrap gap-3">
                    <li className="font-bold">Enlaces</li>
                    <li>Inicio</li>
                    <li>Tienda</li>
                    <li>Contactanos</li>
                    <li>Metodos de pago y envio</li>
                    <li>Sobre nosotros</li>
                </ul>
                <div className="flex flex-col gap-5">
                    <button className="py-3 px-5 bg-dark-green color-white text-nowrap text-white">Iniciar sesión</button>
                    <button className="py-3 px-5 bg-white border border-2 border-dark-green text-dark-green">Cotizar</button>
                </div>
            </div>
            <div className="flex items-center">
                <h6 className="py-5">©Blossom Garden, Code Aurora. 2024</h6>
            </div>
        </footer>
    )
}