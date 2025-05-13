import { apiUrlPais } from "../api/apiConfig";
import { Pais } from "../models/types/Pais";


export async function deletePais(id: number): Promise<Pais> {
    const response = await fetch(apiUrlPais + '/Paises/' + id,{
        method: 'DELETE',
    });
    if(!response.ok){
        const errorDel = await response.json();
        throw new Error(errorDel.error||'Error al eliminar el pais');
    }
    
    const deletePais= await response.json();

    return deletePais;
}