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

     const [productsCategory, setProductsCategory] = useState([]);
     console.log(products)
      useEffect(()=> {
          console.log("%cse montó el componente", "color: green");
          fetch("http://localhost:3100/api/products")
              .then(response => response.json())
              .then(data => {
                setProductsCategory(data.meta)
              })
              .catch(error => console.error(error));
      }, [])
      
       
    return(
        <div className="body-home">
                <section className="cuerpo-paneles">
                    <div className="paneles">
                        <div className="panel">Total productos
                            <div>{products.length}</div>
                        </div>
                        <div className="panel">Total usuarios
                            <div>{personajes.length}<br/>
                        </div>
                    </div>
                        </div>

                        <h1 className="titulo-productos">Vinos por categoría:</h1>

                        <div className="paneles-vinos">
                            <div className="panel-vino-andino">
                                Vinos Andinos:
                                
                            </div>
                            <div className="panel-vino-patagonico">
                                Vinos Patagónicos:
                                
                            </div>
                            <div className="panel-vino-importado">
                                Vinos Importados:
                                
                            </div>

                        </div>
              
                </section>

                <div className="seccion-inferior">
                    <div className="ultimo-producto">
                        <h2 className="ultProdTitulo">Último Producto:</h2>

                        <div className="ultProdImagen">
                            Imagen
                        </div>
                        <div>Lorem</div>
                    </div>
                    
                    <div className="containerHome">
                        <a className="tituloHome2" href="http://localhost:3100/">
                            <div className="boxHome"> </div>  
                        </a>
                    
                    </div>
                </div>      
            
        </div>
    )
}

export default Home;