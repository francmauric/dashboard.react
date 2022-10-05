import React from "react";
import {useState , useEffect } from "react";
import {useParams} from "react-router-dom"

function ApiProductDetail(){
    let { id } = useParams();
     
    const [products, setProducts] = useState([]);
    console.log(products)
     useEffect(()=> {
         console.log("%cse montó el componente", "color: green");
         fetch("http://localhost:3100/api/products/" + id)
             .then(response => response.json())
             .then(data => {
                 setProducts(data.data)
             })
             .catch(error => console.error(error));
     }, [])
     
    return(
            <div>
                prueba { id}
            </div>
    )
}

export default ApiProductDetail;