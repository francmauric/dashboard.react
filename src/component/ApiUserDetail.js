import {useState , useEffect } from "react";

function ApiUserDetail() {
    const [personajes, setPersonajes] = useState([]);
   console.log(personajes)
    useEffect(()=> {
        console.log("%cse montó el componente", "color: green");
        fetch("http://localhost:3100/api/users/6")
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.data)
            })
            .catch(error => console.error(error));
    }, [])
        
    
    
    return(
        <div>
            <h2>Detalle de usuario</h2>
            <ul>
            { personajes.length === 0 && <p>Cargando</p>}
                { 
                   /* personajes.map((personaje,i) =>{
                        return ( */
                             <li /* key={i} */>
                                <h3>{personajes.name}</h3>
                                <img src={personajes.picture} alt="avatar" width="150" />
                             </li>   
                        /* )
                    }) */
                    }
            </ul>
        </div>
    )
}
export default ApiUserDetail;