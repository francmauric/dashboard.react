import { Link } from "react-router-dom";

function ApiUsuario({ personajes }) {


  return (
    <div className="body-usuarios">
      <h2 className="lista-users">Listado de Usuarios</h2>
      <h2>{personajes.name}</h2>
      <div className="listado-usuarios">
        {personajes.length === 0 && <p>Cargando</p>}
        {personajes.map((personaje, i) => {
          return (
            <div className="userInfo" key={i}>
              <h3 class="userName">{personaje.name}</h3>
              <img
                className="userImage"
                src={"http://localhost:3100/images/users/" + personaje.picture}
                alt="avatar"
                width="150"
              />
              <br />
              <div className="userData">{personaje.email}</div>
              <div className="userData">{personaje.userName}</div>
              {/* <Link className="userDetail" to="/apiUsuario/detail"> Detalle de Usuario </Link> */}
              <Link
                className="userDetail"
                to={`/detailUser/${personaje.user_id}`}
              >
                Detalle de Usuario
              </Link>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
export default ApiUsuario;
