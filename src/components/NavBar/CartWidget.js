import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { context } from "../../context/CartContext";


const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (
        <>
        <ShoppingCartIcon fontSize="large"  style={styles.cart} /> 
         { qtyCompra >= 1 ? <span style={styles.cont} >{qtyCompra}</span> : null }
         </>
    )

}

export default CartWidget 

const styles ={

cart:{
    backgroundColor: '#ec407a',
    borderRadius: '50%',
    marginTop: '1rem',
    
},

cont:{
    color: '#ec407a',
    borderRadius: '50%',
    
}

}