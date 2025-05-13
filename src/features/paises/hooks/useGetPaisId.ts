import { useEffect, useState } from "react";
import { getPaisId } from "../services/getPaisId"; // Importa los servicios de la API
import { Pais } from "../models/types/Pais";
import { InitialPais } from "../models/initial-state/PaisState";




export const useGetPaisId=(idPais: number) => {

    const [pais, setPais] = useState<Pais>(InitialPais);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        (async()=>{
            setIsLoading(true);
            setError(null); 
            try{
            const paisResponse = await getPaisId(idPais);
            setPais(paisResponse);
            }catch(err){
                setError(err as Error);
            }
            finally{
                setIsLoading(false)
            }
        })();
    },[idPais])

    return {pais, isLoading, error};
}