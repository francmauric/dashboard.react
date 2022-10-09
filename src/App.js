import {Route, Link, Switch} from "react-router-dom"
import ApiUsuario from "./component/ApiUsuarios";
import Home from './component/Home';
import ApiProducts from "./component/ApiProducts";
import ApiUserDetail from "./component/ApiUserDetail"
import ApiProductDetail from "./component/ApiProductDetail";
import logoOracle from "./assets/images/logo.jpeg"

function App() {



  return (

    <div className="bodyApp">

      <div className="HeaderNav">
        <img src={logoOracle} className="logo-oracle" alt="Oracle Wines"/>
        <div className="enlaces-nav">
          <Link className="LinkNav" to="/">Home</Link>
          <Link className="LinkNav" to="/apiUsuario">Usuarios</Link>
          <Link className="LinkNav" to="/apiProducts">Productos</Link>
        </div>


      </div>

    <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apiUsuario" component={ApiUsuario} />
          <Route path="/apiProducts" component={ApiProducts} />
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


