import {useState , useEffect } from "react";
import {Link, Route} from "react-router-dom";
import ApiUserDetail from "./ApiUserDetail"
function ApiUsuario() {
    const [personajes, setPersonajes] = useState([]);
   console.log(personajes)
    useEffect(()=> {
        console.log("%cse montó el componente", "color: green");
        fetch("http://localhost:3100/api/users")
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.data)
            })
            .catch(error => console.error(error));
    }, [])
        
    
    
    return(
        <div>
            <h2>componente de usuario</h2>
            <ul>
            { personajes.length === 0 && <p>Cargando</p>}
                { 
                   personajes.map((personaje,i) =>{
                        return (
                            
                             <li key={i}>
                                <h3>{personaje.name}</h3>
                                <img src={"http://localhost:3100/images/users/" + personaje.picture} alt="avatar" width="150" /><br />
                                <Link to="/apiUsuario/detail"> UserDetail </Link>
                                
                             </li>   
                        )
                    })
                    }
            </ul>
            <Route path='/apiUsuario/detail' component={ApiUserDetail} />
        </div>
    )
}
export default ApiUsuario;