import { apiUrlPais } from "../api/apiConfig";
import {Pais} from "../models/types/Pais";


export async function getPais(): Promise<Pais[]>{ /*Retorna un arreglo de objetos que siguen la estructura del modelo Pais, obtenidos desde la API  */
    const response = await fetch(apiUrlPais +'/Paises')
    
    if(!response.ok){
        const errorGet = await response.json(); 
        throw new Error(errorGet || "Error a cargar los paises");
    }
    const pais = await response.json(); //respuesta reponse json a un objeto o arreglo JS
    return pais;
}
