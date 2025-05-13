import { apiUrlPais } from "../api/apiConfig";
import { Pais } from "../models/types/Pais";


export async function postPais(nuevoPais:Pais): Promise<Pais>{ //nuevoPais:Pais acepta solo los datos del modelo PAIS 
    const response = await fetch(apiUrlPais + '/Paises',{
        method: 'POST', /*Si no se especifica lo toma como un GET */
        headers:{  /* Se encarga de indicar el formato de los datos enviados en el cuerpo de la solicitud.
            Por ejemplo, 'application/json' especifica que el contenido es JSON,
            mientras que 'application/xml' se usaría para enviar datos en formato XML. */
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoPais)//Convierte el objeto 'nuevoPais' a una cadena JSON para enviarlo en la solicitud.
    });/*Función funciona de adentro hacia afuera para dasr la respuesta de un pais creado */
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear el país");
    }
    
    const paisCreado= await response.json();/*La repuesta que verifica que confirma que el país se creó correctamente y permite trabajar con los datos en el código. */

    /*Al llegar a este return, el Promise<Pais> se resuelve (fulfilled) y devuelve el objeto 'Pais' creado, que contiene toda la estructura y los datos confirmados por el servidor.*/
    return paisCreado;

}