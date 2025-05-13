import { apiUrlPais } from "../api/apiConfig";
import { Pais } from "../models/types/Pais";


export async function putPais(id: number, cambiarPais:Pais): Promise<Pais>{
    const response = await fetch(apiUrlPais + '/Paises/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(cambiarPais)
    });

    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar un nuevo pais');
    }

    const updatePais = await response.json();

    return updatePais;
}