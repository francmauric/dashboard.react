import React from "react";
//import vino1 from "../assets/images/vino1.jpg"
import {useState , useEffect } from "react";




function Home(){
    const [personajes, setPersonajes] = useState([]);
    useEffect(()=> {
        console.log("%cse montó el componente", "color: green");
        fetch("http://localhost:3100/api/users")
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.data)
            })
            .catch(error => console.error(error));
    }, [])

    const [products, setProducts] = useState([]);
    console.log(products)
     useEffect(()=> {
         console.log("%cse montó el componente", "color: green");
         fetch("http://localhost:3100/api/products")
             .then(response => response.json())
             .then(data => {
                 setProducts(data.data)
             })
             .catch(error => console.error(error));
     }, [])
     
    return(
        <div >
            <section className="cuerpo">
              <div className="Home"> 
                  <h1 className="tituloHome">ADMINISTRADOR</h1>
              </div>
              <div className="paneles">
                <div className="panel">Total productos
                    <div>{products.length}</div>
                </div>
                <div className="panel">Total categorías</div>
                <div className="panel">Total usuarios
                   <div>                    
                    {personajes.length}<br/>
                    
                     
                    </div>
                </div>
              </div>
              
                 <div className="containerHome">
                 <a className="tituloHome2" href="http://localhost:3100/">
                    <div className="boxHome"> </div>  
                    </a>
                
                </div>
               
            </section>
              
            
            </div>
    )
}

export default Home;