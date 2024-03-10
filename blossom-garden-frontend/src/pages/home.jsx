import banner from '../assets/img/banner.png'
import HomeCategoriesCard from '../components/cards/homeCategoriesCard';
import weddingImg from "../assets/img/wedding.png"
import churchImg from "../assets/img/church.png"
import funeralImg from "../assets/img/funeral.png"
import flower1 from "../assets/img/flower1.png"
import informationImg from "../assets/img/informationSection.png"
import roseIcon from "../assets/icons/rose.svg"
import customIcon from "../assets/icons/customization.svg"
import calendarIcon from "../assets/icons/calendar.svg"
import backgroundFlower1 from "../assets/img/flowerbackground1.png"
import backgroundFlower2 from "../assets/img/flowerbackground2.png"
import backgroundFlower3 from "../assets/img/flowerbackground3.png"
import Footer from '../components/footer/footer';

function Home() {
    return (
        <>
            <section className="h-screen relative overflow-hidden">
                <img src={banner} alt="banner" className='-z-10 absolute h-full w-full object-cover' />
                <div className="-z-10 absolute h-full w-full object-cover bg-white bg-opacity-50"></div>
                <article className="md:w-1/2 h-full flex flex-col justify-center items-start mx-[7%] gap-5">
                    <div>
                        <h1 className='font-title text-8xl font-medium'>Arreglos florales</h1>
                        <h2 className="inline-flex text-6xl text-white bg-blue py-5 px-7">Blossom Garden</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros</p>
                    </div>
                    <button className='text-2xl bg-white border border-2 border-blue rounded px-9 py-3'>Tienda en linea</button>
                </article>
            </section>

            <section className="px-[5vw] py-[5vh] bg-green w-full grid grid-cols-3 gap-10 justify-around text-center">
                <article className='flex gap-1 items-center '>
                    <embed src={roseIcon} className='h-[60%]' />
                    <p className='leading-relaxed'>Gran variedad de arreglos y flores para toda ocasión</p>
                </article>
                <article className='flex gap-3 items-center'>
                    <embed src={calendarIcon} className='h-[60%]'/>
                    <p className='leading-relaxed'>Pedido con al menos una semana de anticipación </p>
                </article>
                <article className='flex gap-3 items-center'>
                    <embed src={customIcon} className='h-[50%]' />
                    <p className='leading-relaxed'>Cualquier consulta o duda puede comunicarse a traves de whatsApp <span className='inline-block'>xxxx-xxxx</span></p>
                </article>

            </section>
            <section>
                <HomeCategoriesCard
                    title="Bodas"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={weddingImg}
                    background={backgroundFlower1}
                />
                <HomeCategoriesCard
                    title="Arreglos para iglesias"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={churchImg}
                    reverse={true}
                    background={backgroundFlower2}
                />
                <HomeCategoriesCard
                    title="Funerales"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, diam eu ultrices aliquet, velit neque vulputate nulla, vulputate hendrerit ex sem non eros"
                    img={funeralImg}
                    background={backgroundFlower3}
                />
            </section>

            <section className='flex flex-col text-center relative'>
                <span className='lg:my-[2%]'>
                    <h1 className='font-title text-7xl'>Flores</h1>
                    <h2>Calidad y variedad</h2>
                </span>
                <span className='absolute inset-0 grid -z-10'>
                    <span className='bg-blue'></span>
                    <span className='bg-white'></span>
                </span>
                <article className='flex justify-center gap-5%'>
                    <img src={flower1} alt="" className='size-[15%]'/>
                    <img src={flower1} alt="" className='size-[15%]'/>
                    <img src={flower1} alt="" className='size-[15%]'/>
                    <img src={flower1} alt="" className='size-[15%]'/>
                </article>
            </section>
            <section className='relative grid grid-cols-[40%,50%] items-end'>
                <img src={informationImg} alt="" className='w-full' />
                <span className='absolute inset-0 grid -z-10'>
                    <span className='bg-white'></span>
                    <span className=' bg-pink'>
                        
                    </span>
                </span>
                <p className=''>
                    Se realiza pedido con al menos una semana de anticipación para asegurar que podamos atender tus preferencias y necesidades de entrega.

                    También ofrecemos la opción de arreglos florales personalizados. Puedes elegir las flores que desees o cotizar diseños segun tu rango de presupuesto

                    Cualquier consulta o duda puede comunicarse a traves de whatsApp xxxx-xxxx
                </p>
            </section>
            <Footer/>
        </>
    )
}

export default Home;