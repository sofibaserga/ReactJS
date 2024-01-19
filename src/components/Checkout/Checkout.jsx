import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";


const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        };

        const ordersRef = collection(db, "orders");


        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id)
            clearCart()

        });


    };

    if (orderId) {
        return (
            <div className="container m-auto my-40 flex flex-col items-center">
                <h2 className="text-3xl mb-4 text-center">Gracias por tu compra</h2>
                <p>Tu código de orden es: {orderId}</p>
            </div>
        );
    }

    return (
        <section className="container m-auto mt-8">
            <div className="border-b border-verdeOscuroTognis mb-8">
                <h2 className="text-3xl mb-4 text-center">Checkout</h2>
            </div>
            <div className="flex flex-col items-center mb-40">
                <h4>Ingrese sus datos</h4>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-80 mt-4"
                >
                    <input
                        className="border py-2 px-4 rounded-full"
                        type="text"
                        placeholder="Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                    />

                    <input
                        className="border py-2 px-4 rounded-full"
                        type="text"
                        placeholder="Dirección"
                        value={values.direccion}
                        onChange={handleInputChange}
                        name="direccion"
                    />
                    <input
                        className="border py-2 px-4 rounded-full"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <button type="submit" className="border-solid border border-verdeOscuroTognis rounded-full flex items-center justify-center py-1 px-12 text-center tracking-wider text-verdeOscuroTognis my-4 hover:bg-verdeOscuroTognis hover:text-white">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};


export default Checkout;