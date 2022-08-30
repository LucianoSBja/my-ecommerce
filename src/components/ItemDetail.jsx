import React, { useState, useContext } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { context } from '../context/CartContext';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const ItemDetail = ({ item }) => {

  const { addItem} = useContext(context);
  const [comprar, SetComprar] = useState(false);
  const onAdd = (contador) => {
    SetComprar(true)
    addItem({ ...item, quantity: contador });
  }

  return (
    <>
      <div key={item.id} className="z-depth-1" style={styles.container}>
        <div style={styles.divImg} >
          <img style={styles.img} src={item.img} alt="" />
        </div>
        <div className="z-depth-1" style={styles.divCont}>
          {comprar ?
            <div>
              <TaskAltIcon style={styles.icon} />
              <p>Se agrego {item.title} a tu carrito</p>
              <Link className="waves-effect waves-light btn pink" to="/cart">
                Finalizar Compra </Link>
              <Link className="waves-effect waves-light btn pink" to="/">Seguir comprando</Link>
            </div>
            :
            <div>
              <div>
              <h3 style={styles.tit} >{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <p>Disponibles: {item.stock}</p>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
              </div>
              </div>
                }
            </div>
      </div>
    </>
  )
}

export default ItemDetail

const styles = {

  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5%',
    justifyContent: ' space-around',
    borderRadius: 5,
  },

  divImg: {
    width: '50%',
    height: '50%',
    padding: '5%',
  },

  img: {
    width: '50%',
    height: '50%',
    display: 'block',
    margin: '0% auto',
  },

  divCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    height: '50%',
    border: '1px solid #bdbdbd',
    padding: '2%',
    borderRadius: 5,
  },

  tit: {
    fontSize: '150%'
  },

  icon:{
    fontSize:'300%',
    color: '#ec407a'
  },
}