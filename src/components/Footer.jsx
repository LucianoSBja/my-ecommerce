import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import PaidIcon from '@mui/icons-material/Paid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const linkedin = {
        href: "https://www.linkedin.com/in/lucianoezequielsotobonja/",
        target: "_blank",
      };

      const gitHub = {
        href: "https://github.com/LucianoSBja",
        target: "_blank",
      };


    return (
        <footer className="z-depth-5" style={styles.footer}>
          <section  style={styles.sec1}>
           <div style={styles.sec1Div}>
            <PaidIcon/>
           <p>Elegi como pagar</p>
           </div> 
           <div style={styles.sec1Div}>
            <LocalShippingIcon />
            <p>Envios a todo el pais</p>
           </div>
           <div style={styles.sec1Div}>
            <SecurityIcon />
            <p> Tus datos protegidos</p>
           </div>
           </section>
           <section style={styles.sec2}>
           <div >
           <a {...linkedin}>
            <LinkedInIcon style={styles.link} />
           </a>
           <a {...gitHub}> 
            <GitHubIcon style={styles.link} />
            </a>
            </div>
            <h4 style={styles.h4} >Desarrollado por LucianoBSja</h4>
            </section>
        </footer>
    )

}

export default Footer;

const styles = {
footer:{
    backgroundColor: '#B2BF50',
    display: 'flex',
    flexDirection: 'column',
    
},

sec1:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '5%',
},

sec1Div:{
    display: 'flex',
    justifyContent:"center",
    padding: '3%',
},

sec2:{
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '45%',
    paddingRight: '45%',
    justifyContent:"center",
},

h4:{
    fontSize: '100%',
    textAling: 'center',
    justifyContent:"center",
},

link:{
    textDecoration: 'none',
    color: 'black',
    fontSize: '300%',
    paddingTop: '5%',
}
,
}