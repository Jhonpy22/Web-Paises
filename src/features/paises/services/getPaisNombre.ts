import { Pais } from "../models/types/Pais";
import { apiUrlPais } from "../api/apiConfig";


export async function getPaisNombre(namePais: string): Promise<Pais>{
    const response = await fetch(`${apiUrlPais}/Paises/buscar?nombre=${encodeURIComponent(namePais)}`);
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.error || "Error buscando el país")
    }
    const pais = await response.json();
    return pais;
}