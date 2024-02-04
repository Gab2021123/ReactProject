import { useState } from "react";
import { useFetchData } from "../../../../hook/useFetchData";
/* import { API_KEY_PUBLIC, API_KEY_PRIVATE } from "../../../api/API";
import { calculateMD5 } from "../../Box-Icon/function";
 */
import "./Main.css";
export default function Main() {
  const [name, setName] = useState("");

  /*  const hash_API = calculateMD5(name + API_KEY_PRIVATE + API_KEY_PUBLIC).then(
    (res) => res
  );
  /*   const hash = calcuteMD5(); */

  /*   const data = useFetchData(
    `https://gateway.marvel.com/v1/public/characters?ts=${name}&name=${name}&apikey=${API_KEY_PUBLIC}&hash=${hash_API}`
  );  */

  /*  const handleChange = (e) => {
    const valor = e.target.value;
    setName(valor);
  };
 */
  return (
    <>
      <input type="text" />

      <main className="main_content"></main>
    </>
  );
}
