import { Link } from "react-router-dom"
import BotonOutlined from "../Boton/BotonOutlined"


const EmptyCart = () => {

    return (
        <section className="flex flex-col items-center my-40">
            <h2 className="text-2xl text-center mb-12">¡Tu carrito está vacío!</h2>
            <p className="text-center mb-2 text-lg">Buscar productos</p>
            <BotonOutlined>
                <Link to={"/"}>Ver más</Link>
            </BotonOutlined>
        </section>
    )
}

export default EmptyCart