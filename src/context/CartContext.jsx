import React, { useState, createContext, useEffect } from "react";

export const context = createContext({
    productosCarrito:[]
});
const { Provider } = context;

const CartContext = ( {children} ) => {

    
    const [compra, setCompra] = useState([]);
    const [qtyCompra, setQtyCompra] = useState(0);

    
    useEffect(() => {
        const getQtyItem = () => {
            let quantity = 0;
            compra.forEach(item =>{
                quantity += item.quantity
            })
            setQtyCompra(quantity);
        }

        getQtyItem();
        
    },[compra])

    const addItem = (item) => {
        if(isInCart(item.id)){
            const found = compra.find(p => p.id === item.id);
            const index = compra.indexOf(found);
            const auxCompra = [...compra];
            auxCompra[index].quantity += item.quantity;
            setCompra(auxCompra);
        }else{
            setCompra([...compra, item])
        };
    }

    const removeItem = (id) => {
        setCompra(compra.filter(item => item.id !== id));
    }

    const clear = () => {
        setCompra([]);
        setQtyCompra(0);
    }

    const isInCart = (id) => {
        return compra.some(compra => compra.id === id);
    }
    const totalCompra=()=>{
        let total=0;
        compra.forEach((e)=>total=total+ parseFloat(e.quantity*e.price))
        
        return total.toFixed(2);
      }

    return(
        <Provider value={{
            productosCarrito:compra, 
            addItem, 
            removeItem, 
            clear, 
            qtyCompra, 
            totalCompra 
            }}>
            {children}
        </Provider>
    );

}

export default CartContext; 