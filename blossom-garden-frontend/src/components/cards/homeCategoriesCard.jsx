export default function HomeCategoriesCard({title, body, img, reverse,background}){
    return(
        <section className="relative grid grid-cols-2">
            <img src={img} alt="arreglo" className="object-cover w-full h-full"/>
            <article className={`flex flex-col justify-center items-start px-10% gap-10 ${reverse ?? 'order-first'}`}>
                <img src={background} className={`absolute -z-10 h-[25vw] ${reverse ? 'top-0 right-0' : ' bottom-0 left-0 '}`} />
                <h1 className="font-title text-7xl">{title}</h1>
                <p>{body}</p>
                <button className="inline-block px-9 py-3 border border-2 border-black rounded">Ver catalogo</button>
            </article>
            
        </section>
    )
}