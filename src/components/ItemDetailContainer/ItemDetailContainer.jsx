

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { db } from "../../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then((docSnapshot) => {
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id
        }
        setItem(doc)

      })

      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <>
      {loading ? (
        <h2 className="text-center text-lg mt-32 mb-60">Cargando...</h2>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;




