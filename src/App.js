import { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ApiUsuario from "./component/ApiUsuarios";
import ApiProducts from "./component/ApiProducts";
import ApiUserDetail from "./component/ApiUserDetail";
import ApiProductDetail from "./component/ApiProductDetail";
import Home from "./component/Home";
import logoOracle from "./assets/images/logo.jpeg";

function App() {
  const [products, setProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    fetch("https://oraclewines.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setProductsCategory(data.meta.countByCategory);
      })
      .catch((error) => console.error(error));
  }, []);

  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    console.log("%cse montó el componente", "color: green");
    fetch("https://oraclewines.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bodyApp">
      <div className="HeaderNav">
        <img src={logoOracle} className="logo-oracle" alt="Oracle Wines" />
        <div className="enlaces-nav">
          <Link className="LinkNav" to="/">
            Home
          </Link>
          <Link className="LinkNav" to="/apiUsuario">
            Usuarios
          </Link>
          <Link className="LinkNav" to="/apiProducts">
            Productos
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home products={products} personajes={personajes} productsCategory={productsCategory} />
        </Route>

        <Route path="/apiUsuario">
          <ApiUsuario personajes={personajes} />
        </Route>

        <Route path="/apiProducts">
          <ApiProducts products={products} />
        </Route>

        <Route path="/detail/:id">
          <ApiProductDetail />
        </Route>

        <Route path="/detailUser/:id">
          <ApiUserDetail />
        </Route>
      </Switch>
    </div>
  );
}
export default App;


