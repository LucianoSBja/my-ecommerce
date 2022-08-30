import React from 'react'
import Logo from '../../assets/pluma-2.svg'
import CartWidget from './CartWidget'
import 'materialize-css/dist/css/materialize.min.css'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

  const categorias = [
    { name: "Vinchas", id: 0, route: "/category/vinchas" },
    { name: "Gogos", id: 1, route: "/category/gogo" },
    { name: "Gomitas", id: 2, route: "/category/gomitas" },
    { name: "Moños", id: 3, route: "/category/moños" },
  ];
  return (
    <header style={styles.header} className="z-depth-5">
      <div style={styles.logo} >
        <Link to="/" > <img src={Logo} alt="logo"style={styles.imgLogo} sx={{ fontSize: 100 }} /></Link>
      </div>
      <nav style={styles.nav} className="z-depth-1">
      {categorias.map((categoria) => 
        <NavLink style={styles.navL} key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
        <Link to="/cart"> <CartWidget /> </Link>
      </nav>
    </header>
  )
}

export default NavBar

const styles = {

  header: {
    backgroundColor: '#dcdcdc',
    display: 'flex',
    flexDirection: 'column',
    
  },

  logo: {
    display: 'block',
  },

  imgLogo:{
    filter: 'invert(18%) sepia(88%) saturate(7101%) hue-rotate(313deg) brightness(88%) contrast(101%)',
    display: 'block',
    margin: '0% auto',
    width: 95,
    
  },

  nav:{
    borderRadius: 10,
    backgroundColor: '#B2BF50',
    fontSize: 20,
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    
  },

  navL:{
    
    color: '#D9048E',
    
  },

}
