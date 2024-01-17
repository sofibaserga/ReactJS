import Boton from "../Boton/Boton";


const ItemDetail = ({ item }) => {

    return (
        <div className="py-1 bg-verdeOscuroTognis">

            <div className="mx-40 mt-16 mb-36 flex gap-20 justify-center items-center">
                <img className="rounded-3xl " src={item.portada} alt={item.name} />

                <div className="w-2/5">
                    <h3 className="text-2xl mb-2 text-white">{item.name}</h3>
                    <p className="text-xl font-light text-white mb-4">{item.description}</p>
                    <p className="text-xl text-verdeClaroTognis mb-8">${item.price}</p>

                    <div className="border-b border-t border-negroTognis/30">
                        <Boton className="border-white text-white my-8 hover:bg-white/20">Agregar al carrito</Boton>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ItemDetail;