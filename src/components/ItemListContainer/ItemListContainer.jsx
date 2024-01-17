


import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import Contenedor from "../Contenedor/Contenedor"


const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')

        const docsRef = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef


        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }

                })
                setProductos(docs)
            })

            .finally(() => setLoading(false))

    }, [categoryId])




    return (
        <section >
            <Contenedor>
                <img src="public/Tienda/imagen-portada.png" alt="imagen perro tognis tomando cafe" className="w-24 mb-8"/>
                <p className="uppercase text-sm text-center">{greeting}</p>
                <h1 className="text-3xl uppercase mt-1 mb-3 text-center text-verdeOscuroTognis">Tienda Togni's cafe</h1>
                <p className="font-normal text-lg text-center px-80">Nuestra selección de productos. Comprá online y retirá tu producto en nuestro local en 48hs.</p>
                {
                    loading
                        ? <h2 className="text-center text-lg mt-32">Cargando...</h2>
                        : <ItemList productos={productos} />
                }
            </Contenedor>
        </section>
    )
}

export default ItemListContainer;