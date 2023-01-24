import React from "react";
import {useState , useEffect } from "react";
import {useParams} from "react-router-dom"

function ApiProductDetail(){
    let { id } = useParams();

    const [product, setProduct] = useState([]);

     useEffect(()=> {
         console.log("%cse montó el componente", "color: green");
         fetch("https://oraclewines.onrender.com/api/products/" + id)
             .then(response => response.json())
             .then(data => {
                 setProduct(data.data) //product es un objeto
             })
             .catch(error => console.error(error));
     }, [id])

    return(
           <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt='vino'/>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            
            <p>Descripcion: {product.description}</p>
            <p>Extra Descripcion: {product.extra_description}</p>
            <p>Puntuacion: {product.rate} Estrellas</p>
            </div>
    )
}

export default ApiProductDetail;