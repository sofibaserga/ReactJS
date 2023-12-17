


import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then((data) => {
                const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data

                setProductos(items)

            })
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <section className="mx-40 py-20">
            <p className="text-sm text-center">{greeting}</p>
            <p className="text-sm uppercase mt-1 mb-3 text-center">Conocé nuestros productos</p>
            <h1 className="text-5xl font-normal text-center px-80">Productos de calidad para una <span className="font-medium">vida saludable</span></h1>
            {
                loading
                    ? <h2 className="text-center text-lg mt-32">Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </section>
    )
}

export default ItemListContainer;