

import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="mt-20 mx-20 flex flex-wrap justify-center gap-8">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
    </section>
  );
};

export default ItemList;