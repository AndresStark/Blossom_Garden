export default function HomeCategoriesCard({title, body, img, reverse}){
    return(
        <section className="grid grid-cols-2">
            <img src={img} alt="" />
            <article className={`flex flex-col w-full h-full justify-center px-10% ${reverse ?? 'order-first'}`}>
                <h1 className="font-title text-3xl">{title}</h1>
                <p>{body}</p>
                <button className="px-4 py-2 border border-2 border-black rounded">Ver catalogo</button>
            </article>
            
        </section>
    )
}