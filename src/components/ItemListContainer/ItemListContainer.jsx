


const ItemListContainer = ({greeting}) => {

    return (
        <section className="mx-40 py-20">
            <p className="text-sm uppercase mb-3 text-center">Conocé nuestros productos</p>
            <h1 className="text-5xl font-regula text-center px-80">Productos de calidad para una vida saludable</h1>
            <p className="text-sm mt-10 text-center">{greeting}</p>
        </section>
    )
}

export default ItemListContainer;