import {Route, Link} from "react-router-dom"
import ApiUsuario from "./component/ApiUsuarios";
import Home from './component/Home';
import ApiProducts from "./component/ApiProducts";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bodyApp">
        
      <div className="HeaderNav">
        <Link className="LinkNav" to="/">  Home  </Link> 
        <Link className="LinkNav" to="/apiUsuario"> Usuarios</Link> 
        <Link className="LinkNav" to="/apiProducts"> Productos</Link>
      
    
     
      </div>
        <div className="Separador">

        </div>
        <Route exact path="/" component={Home} />
        <Route path="/apiUsuario" component={ApiUsuario} />
      <Route path="/apiProducts" component={ApiProducts} />
        <Footer />
    </div>
  );
}

export default App;


