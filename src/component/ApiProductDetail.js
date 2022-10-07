import React from "react";
import {useState , useEffect } from "react";
import {useParams} from "react-router-dom"

function ApiProductDetail(){
    let { id } = useParams();

    const [product, setProduct] = useState([]);

     useEffect(()=> {
         console.log("%cse montó el componente", "color: green");
         fetch("http://localhost:3100/api/products/" + id)
             .then(response => response.json())
             .then(data => {
                 setProduct(data.data) //product es un objeto
             })
             .catch(error => console.error(error));
     }, [])

    return(
           <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt='vino'/>
            </div>
    )
}

export default ApiProductDetail;