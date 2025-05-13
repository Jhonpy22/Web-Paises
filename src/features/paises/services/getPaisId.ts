import { apiUrlPais } from "../api/apiConfig";
import {Pais} from '../models/types/Pais'



export async function getPaisId(idPais: number): Promise<Pais>{
    const response = await fetch(apiUrlPais + '/Paises/'+ idPais)

    if(!response.ok){
        const errorGetbyId = await response.json(); 
        throw new Error(errorGetbyId.error || "Error a cargar los paises");
    }
    const pais = await response.json();

    return pais;
}