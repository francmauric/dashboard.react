import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ApiUserDetail() {
  let { id } = useParams();
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color: green");
    fetch("https://oraclewines.onrender.com/api/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.data);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h2>Detalle de usuario</h2>

      <h3>{personajes.name}</h3>
      <img src={personajes.picture} alt="avatar" width="150" />
    </div>
  );
}
export default ApiUserDetail;
