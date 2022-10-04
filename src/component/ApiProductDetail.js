import React from "react";
import {useState , useEffect } from "react";


function ApiProductDetail(){
    const [products, setProducts] = useState([]);
    console.log(products)
     useEffect(()=> {
         console.log("%cse montó el componente", "color: green");
         fetch("http://localhost:3100/api/products/2")
             .then(response => response.json())
             .then(data => {
                 setProducts(data.data)
             })
             .catch(error => console.error(error));
     }, [])
     let idProducts = products.user_id
         console.log(idProducts)
    return(
            <div>
                
                
                <h1>Detalle del Usuario</h1>
                
            <ul>
            { products.length === 0 && <p>Cargando</p>}
                { 
                  /*  products.map((products,i) =>{
                        return ( */
                             <li /* key={i} */>
                                <h3>{products.name}</h3>
                                <img src={"http://localhost:3100/images/" + products.image} alt="avatar" width="150" />
                             </li>   
                        /* )
                    }) */
                    }
            </ul>
            </div>
    )
}

export default ApiProductDetail;