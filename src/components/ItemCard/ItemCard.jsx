
import { Link } from "react-router-dom";


const ItemCard = ({item}) => {

    return (
      <Link to={`/item/${item.id}`} className="w-96 h-550 bg-cover text-center flex flex-col items-center justify-end	pb-10" style={{ backgroundImage: `url(${item.portada})`}}>
        <p className="uppercase text-xs mt-5 bg-white w-fit px-2 py-0.5 mb-2">{item.etiqueta}</p>
        <h3 className="text-lg mb-1">{item.name}</h3>
        <p className="text-base">${item.price}</p>
  
      </Link>
    );
  };
  
  export default ItemCard;