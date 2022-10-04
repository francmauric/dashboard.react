import React from "react";
import {useState , useEffect } from "react";
import ApiProductDetail from "./ApiProductDetail";
import {Link, Route} from "react-router-dom"

function ApiProducts(){
    
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
            <div>
                
                
                <h1>componente api products</h1>
                
            <ul>
            { products.length === 0 && <p>Cargando</p>}
                { 
                   products.map((products,i) =>{
                        return (
                             <li key={i}>
                                <h3>{products.name}</h3>
                                <img src={"http://localhost:3100/images/" + products.image} alt="avatar" width="150" />
                                <div>
                                    <Link to="/ApiProducts/detail/:id">Detalle de Producto</Link>
                                    <Route path="/ApiProducts/detail" component={ApiProductDetail} />
                                </div>
                             </li>   
                        )
                    })
                    }   
            </ul>
            </div>
    )
}

export default ApiProducts;