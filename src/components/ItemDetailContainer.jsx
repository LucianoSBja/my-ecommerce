import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDoc, collection, doc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState (true);
  const { Id } = useParams ();
 
 useEffect(() =>{
  const productosCollection = collection(db, 'productos');
  const refDoc = doc(productosCollection, Id);
    getDoc(refDoc)
    .then(result => {
      const producto = {
        id: result.id,
        ...result.data()
      }
      setProductos(producto);
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
 },[Id]);

    return(
        <>
         {loading ? <p>cargando...</p> :<ItemDetail item={productos}></ItemDetail>}
        
        
        </>
        
    )
}


export default ItemDetailContainer