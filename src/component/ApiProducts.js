import React from "react";
import {useState , useEffect } from "react";

import {Link} from "react-router-dom"

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
     /* products.map((product,i)=>{
        if(product.category.name === "Andino")
        console.log(product.category.name)
        let suma = + 1
        return(
        
        
     )})
     console.log(suma) */
    return(
            <div className="body-productos">

                <h1 className="titulo-productos">Listado de Productos</h1>

                <div className="listado-productos">
                { products.length === 0 && <p>Cargando</p>}
                    {
                    products.map((products,i) =>{
                            return (
                                <div className="detalle-producto" key={i}>
                                    <h4 className="nombre-vino">{products.name}</h4>
                                    <img className="imagen-producto" src={"http://localhost:3100/images/" + products.image} alt="avatar" width="150" />
                                    <div>
                                    <Link to={`/detail/${products.product_id}`}>Detalle de Producto</Link>
                                    </div>
                                        <div className="producto-precio">Precio: ${products.price}</div>
                                        <div className="producto-descuento">Descuento: {products.discount}%</div>
                                        <div className="producto-stock">Stock: {products.stock}</div>
                                        <div className="producto-premios">Premios: {products.awards}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default ApiProducts;