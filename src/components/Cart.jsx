import React, { useContext } from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Cart = () => {

    const { removeItem, clear, totalCompra, productosCarrito } = useContext(context);

    return (
        <>
            {productosCarrito.length === 0 ? 
            <div style={styles.divCart}>
                <ProductionQuantityLimitsIcon  style={styles.cart} />
                <h3 style={styles.tituloCart}> Aun no agregaste productos al Carrito </h3>
                <Link className="waves-effect waves-light btn pink" to="/">Ir a productos</Link>
            </div>
                : <div style={styles.divCart} >
                     <h1 style={styles.tituloCart}> Detalle de su carrito  </h1> {productosCarrito.map(item =>
                    <div key={item.id} style={styles.divDet}>
                        <div>
                        <h3 style={styles.art} id={item.id}> {item.title}  
                        <button style={styles.btnRemove} onClick={() => removeItem(item.id)}>X</button></h3>
                        <p> {item.quantity} unidades</p>
                        <p>${item.price * item.quantity}</p>
                        </div>
                    </div>
                )}
                    <div style={styles.totalCompra}>Total Compra: $ {totalCompra()}</div>

                    <button style={styles.btnFin} className="waves-effect waves-light btn pink" onClick={clear}> limpiar</button>
                    <button style={styles.btnFin} className="waves-effect waves-light btn pink"> <Link style={styles.link} to={'/form'}>Finalizar compra</Link></button>
                </div>}
        </>
    )
}

export default Cart; 

const styles = {

tituloCart:{
    fontSize: '50',
},

divCart:{
    
    padding: '10%',
    gap: '5%',
    },

art:{
    fontSize:'200%',
    textAlling:'center',
},

divDet:{
    display: 'flex',
    border: '2px solid gray',
    padding: '1%',
    gap: '25%',
},

btnRemove:{
    align:"left",
    background:'white'
  
},
 totalCompra:{
    padding: '1%',
    alignItems: 'center',
 },

 btnFin:{
    alignItems: 'center',
    margin: '2%',
 },

 link:{
    color: 'white',
 },

 cart:{
    fontSize: '800%',
    
 }

}