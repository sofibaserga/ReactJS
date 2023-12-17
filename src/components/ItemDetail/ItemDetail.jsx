import Boton from "../Boton/boton";


const ItemDetail = ({ item }) => {

    return (
        <div className="mx-40 my-20 flex items-center">

            <div className="flex gap-20 items-center">
                <img className="w-1/2 h-auto rounded-lg" src={item.interna} alt={item.name} />

                <div className="w-1/2">
                    <p className="uppercase text-xs mb-2 bg-verdeNutrix-25 w-fit px-2 py-0.5">{item.etiqueta}</p>
                    <h3 className="text-4xl font-normal mb-2">{item.name}</h3>
                    <p className="mb-4 text-2xl">${item.price}</p>
                    <p className="text-base">{item.description}</p>

                    <Boton className="bg-green-400">Agregar al carrito</Boton>
                    
                </div>
            </div>

            
        </div>
    );
};

export default ItemDetail;