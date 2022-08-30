import React, { useState, useContext } from "react";
import { context } from '../context/CartContext';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
export const Form = () => {
    const { productosCarrito, clear, totalCompra } = useContext(context)
    const [idOrden, setIdOrden] = useState()
    const [loading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: ''
    })
    const { Nombre, Email } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ventas')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()

        } catch (error) {
            return(
                error
            )
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = serverTimestamp()
        const items = productosCarrito.map(e => { return { id: e.id, Titulo: e.title, Precio: e.price } })
        const total = totalCompra()
        const data = { buyer, dia, items, total }
        generarPedido(data)
    }

    return (
        <>
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
                : (!idOrden && <div  style={styles.divForm}>
                    <form style={styles.form} className="z-depth-1" onSubmit={enviar}>
                        <div>
                            <h2> Carga tus datos</h2>
                        </div>
                        <div>
                            <p>
                                <input type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre" required />
                            </p>
                            <p>
                                <input type="email" name="Email" onChange={Input} placeholder="Mail" value={Email} required />
                            </p>
                            <p>
                                <button className="waves-effect waves-light btn pink" >
                                    Enviar
                                </button>
                            </p>
                        </div>
                    </form>
                </div>)}
            <div>
                {
                    idOrden && (
                        <div style={styles.divConfirm}>
                            <h3  >¡Gracias por su Compra!</h3>
                            <p >{`Su codigo de operacion es: ${idOrden}`}</p>
                            <p >{`Le enviarenos a ${Email} la factura electronica de su compra`}</p>
                            <div style={styles.centrar} >
                                <Link  className="waves-effect waves-light btn pink" to={'/'} >Realizar otra compra </Link></div>
                        </div>
                    )
                }
            </div>
        </>
    )

}

const styles = {

    load: {
        display: 'block',
        margin: 'auto',
    },

    divForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop:'5%',
        paddingBottom:'5%',
        
    },

    form:{
        borderRadius: 10,
        border: '1px solid #bdbdbd',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop:'5%',
        paddingBottom:'5%',
    },

    divConfirm:{
        borderRadius: 10,
        border: '1px solid #bdbdbd',
        paddingLeft: '30%',
        paddingRight: 'auto',
        paddingTop:'5%',
        paddingBottom:'5%',
    },

    centrar:{
        paddingLeft: '15%',
        paddingRight: 'auto',

    }

}