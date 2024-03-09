import banner from '../assets/img/banner.png'
import { IoRoseOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import HomeCategoriesCard from '../components/cards/homeCategoriesCard';
import weddingImg from "../assets/img/wedding.png"
import churchImg from "../assets/img/church.png"
import funeralImg from "../assets/img/funeral.png"
import flower1 from "../assets/img/flower1.png"
import informationImg from "../assets/img/informationSection.png"

function Home() {
    return (
        <>
            <section className="h-[80vh] relative overflow-hidden">
                <img src={banner} alt="banner" className='-z-10 absolute h-full w-full object-cover' />
                <div className="-z-10 absolute h-full w-full object-cover bg-white bg-opacity-30"></div>
                <article className="md:w-1/2 h-full flex flex-col justify-center items-start mx-5% gap-5">
                    <div>
                        <h1 className='font-title text-8xl font-medium'>Arreglos florales</h1>
                        <h2 className="text-6xl text-white bg-blue px-4 py-7">Blossom Garden</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, vero? Eum omnis tempore consectetur illum nobis ratione at ullam placeat rerum. Laudantium nam nisi aut autem consequatur officiis labore magnam!</p>
                    </div>
                    <button className='bg-white border border-2 border-blue rounded px-6 py-2'>Tienda en linea</button>
                </article>
            </section>

            <section className="bg-green w-full flex justify-around p-10 text-center">
                <article className='flex gap-3 items-center'>
                    <IoRoseOutline className='text-dark-green' size={42} />
                    <p>Gran variedad de arreglos y flores para toda ocasión</p>
                </article>
                <article className='flex gap-3 items-center'>
                    <LuCalendarClock className='text-dark-green' size={40} />
                    <p>Pedido con al menos una semana de anticipación </p>
                </article>
                <article className='flex gap-3 items-center'>
                    <FaWhatsapp className='text-dark-green' size={40} />
                    <p>Cualquier consulta o duda puede comunicarse a traves de whatsApp xxxx-xxxx</p>
                </article>

            </section>
            <div>
                <HomeCategoriesCard
                    title="Bodas"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={weddingImg}
                />
                <HomeCategoriesCard
                    title="Arreglos para iglesias"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={churchImg}
                    reverse={true}
                />
                <HomeCategoriesCard
                    title="Funerales"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={funeralImg}
                />
            </div>

            <section className='flex flex-col text-center relative'>
                <h1 className='font-title'>Flores</h1>
                <h2>Calidad y variedad</h2>
                <span className='absolute inset-0 grid -z-10'>
                    <span className='bg-blue'></span>
                    <span className='bg-white'></span>

                </span>
                <article className='flex justify-around'>
                    <img src={flower1} alt="" srcset="" />
                    <img src={flower1} alt="" srcset="" />
                    <img src={flower1} alt="" srcset="" />
                    <img src={flower1} alt="" srcset="" />
                </article>
            </section>
            <section className='relative grid grid-cols-2 items-end'>
                <img src={informationImg} alt="" />
                <span className='absolute inset-0 grid -z-10'>
                    <span className='bg-white'></span>
                    <span className='bg-pink'></span>
                </span>
                <p className='p-10%'>
                    Se realiza pedido con al menos una semana de anticipación para asegurar que podamos atender tus preferencias y necesidades de entrega.

                    También ofrecemos la opción de arreglos florales personalizados. Puedes elegir las flores que desees o cotizar diseños segun tu rango de presupuesto

                    Cualquier consulta o duda puede comunicarse a traves de whatsApp xxxx-xxxx
                </p>
            </section>

        </>
    )
}

export default Home;