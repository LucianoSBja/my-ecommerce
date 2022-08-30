import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (prop) => {

  const { categoriaSelec } = useParams();
  const { name } = prop;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const consulta = categoriaSelec
      ? query(collection(db, 'productos'), where('category', '==', categoriaSelec))
      : collection(db, 'productos');

    getDocs(consulta)
      .then(result => {
        const lista = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProductos(lista);
      })
      .catch(error  => (error))
      .finally(() => setLoading(false))
  }, [categoriaSelec]);


  return (
    <section style={styles.cont}>
      <div>
        <h2 className="z-depth-2" style={styles.subTitulo}>
           {name} 
        </h2>
      </div>
      <div style={styles.items}>
        {loading ?
          <div style={styles.load} className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          : <Itemlist key={Itemlist.id} productos={productos} />}
      </div>

    </section>
  )
}

export default ItemListContainer

const styles = {

  load: {
    display: 'block',
    margin: 'auto',
  },
  cont: {
    display: 'flex',
    flexDirection: 'column',
  },

  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    
  },

  subTitulo: {
    textAlign: 'center',
    fontFamily: 'Koulen',
    backgroundColor: '#ec407a',
    color: '#ffebee',
  },

}
