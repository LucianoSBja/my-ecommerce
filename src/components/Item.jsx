import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";



const Item = ({ producto }) => {

  return (
    <div className="z-depth-1" style={styles.container}>
      <div style={styles.item}>
      <div className="z-depth-1" style={styles.divImg}>
        <img style={styles.img} src={producto.img} alt="" />
      </div>
      <div>
        <h3 style={styles.titItem}>
        {producto.title}
        </h3>
        <ul>
          <li>
          ${producto.price}
          </li>
          <li>
          <Link to={`/item/${producto.id}`} >Detalle</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Item


const styles = {

  container: {
    width: '30%',
    marginBottom:'2rem',
    padding:'2%',
    background: '#ffebee',
    borderRadius: 5,
    textAlign: 'center',
  },

  item:{
    display:'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    gap:30,
    
  },

divImg:{
  width: '100%',
    border: '1px solid #bdbdbd',
    padding:'2%',
    display:'flex',
    justifyContent:'center',
    background: 'white',
    
},

img:{
  width: '70%',
    height: '80%',
    justifyContent:'center',
    display: 'block',
    margin: '0% auto',
    
},

titItem:{
  fontSize:'150%',
}



}