import {useState , useEffect } from "react";
import {Link, Route} from "react-router-dom";
import ApiUserDetail from "./ApiUserDetail"
function ApiUsuario(props) {
    console.log()
    /* personajes  = props */
    const [personajes, setPersonajes] = useState([]);
   console.log(personajes.length)
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
        <div className="body-usuarios">
            <h2 className="lista-users">Listado de Usuarios</h2>
                <h2>{props.personajes}</h2>
                <div className="listado-usuarios">
                { personajes.length === 0 && <p>Cargando</p>}
                    { 
                      personajes.map((personaje,i) =>{
                            return (
                                
                                <div className="userInfo" key={i}>
                                    <h3 class="userName">{personaje.name}</h3>
                                    <img className="userImage" src={"http://localhost:3100/images/users/" + personaje.picture} alt="avatar" width="150" /><br />
                                    <div className="userData">{personaje.email}</div>
                                    <div className="userData">{personaje.userName}</div>
                                    <Link className="userDetail" to="/apiUsuario/detail"> Detalle de Usuario </Link>
                                    
                                </div>   
                            )
                        })
                        }
                </div>
            <div>
                
            </div>
            <Route path='/apiUsuario/detail' component={ApiUserDetail} />
        </div>
    )
}
export default ApiUsuario;