
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";


const ItemCard = ({item}) => {

    return (
      <Link to={`/item/${item.id}`} className="text-center flex flex-col items-center justify-end	pb-10">
        <img src={item.portada} alt={item.name} className="rounded-3xl mb-8 w-80" />
        <h3 className="text-lg mb-1 font-medinoum">{item.name}</h3>
        <p className="w-80 mb-4">{item.description}</p>
        <p className="text-lg text-verdeClaroTognis ">${item.price}</p>
        <Boton>Ver más</Boton>
      </Link>
    );
  };
  
  export default ItemCard;