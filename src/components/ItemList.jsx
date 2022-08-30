import React from "react";
import Item from './Item';

const Itemlist = ({productos}) => {
    return(
        <>
       {
        productos.map((producto => <Item key={producto.id} producto={producto}/>))
       }
        </>);
};

export default Itemlist