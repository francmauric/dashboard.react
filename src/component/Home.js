import React from "react";


function Home({ products, personajes, productsCategory }) {
    const ultimoProducto = products[products.length - 1];
    
    return (
        <div className="body-home">
            <section className="cuerpo-paneles">
                <div className="paneles">
                    <div className="panel">
                        Total productos
                        <div>{products.length}</div>
                    </div>
                    <div className="panel">
                        Total usuarios
                        <div>
                            {personajes.length}
                            <br />
                        </div>
                    </div>
                </div>

                <h1 className="titulo-productos">Vinos por categoría:</h1>

                <div className="paneles-vinos">
                    <div className="panel-vino-andino">
                        Vinos Andinos:
                        <div>{productsCategory.andino}</div>
                    </div>
                    <div className="panel-vino-patagonico">
                        Vinos Patagónicos:
                        <div>{productsCategory.patagonicos}</div>
                    </div>
                    <div className="panel-vino-importado">
                        Vinos Importados:
                        <div>{productsCategory.importados}</div>
                    </div>
                </div>
            </section>

            <div className="seccion-inferior">
                <div className="ultimo-producto">
                    

                    <div className="ultProdImagen">
                    <h2 className="ultProdTitulo">Último Producto</h2>
                        {ultimoProducto &&  <img clasName ="imagen-producto" src={"https://oraclewines.onrender.com/images/" + ultimoProducto.image }  alt="avatar"
                width="250"/>}
                       
                       
                   </div>
                    <div className="NombreUltPro">{ultimoProducto ? ultimoProducto.name : "Loading..."}</div> <br/>
                </div>

                <div className="containerHome">
                    <a className="tituloHome2" href="https://oraclewines.onrender.com/">
                        <div className="boxHome"> </div>
                    </a>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Home;