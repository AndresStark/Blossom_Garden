function Home() {
    return (
        <>
            <section className="w-full h-screen bg-banner bg-cover bg-no-repeat">
                <article className="md:w-1/2 h-full flex flex-col justify-center mx-5%">
                    <h1>Arreglos florales</h1>
                    <h2 className="text-white bg-blue px-4 py-2 flex">Blossom Garden</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, vero? Eum omnis tempore consectetur illum nobis ratione at ullam placeat rerum. Laudantium nam nisi aut autem consequatur officiis labore magnam!</p>
                </article>
            </section>

            <section className="bg-green w-full flex justify-around">
                <article>
                    <p>Gran variedad de arreglos y flores para toda ocasión</p>
                </article>
                <article>
                    <p>Pedido con al menos una semana de anticipación </p>
                </article>
                <article>
                    <p>Cualquier consulta o duda puede comunicarse a traves de whatsApp xxxx-xxxx</p>
                </article>

            </section>
        </>
    )
}

export default Home;