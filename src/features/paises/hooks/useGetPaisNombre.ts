import { useEffect, useState } from "react";
import { InitialPais } from "../models/initial-state/PaisState"
import { Pais } from "../models/types/Pais";
import { getPaisNombre } from "../services/getPaisNombre";




export const useGetPaisNombre=(namePais: string) =>{
    const[pais, setPais] = useState<Pais> (InitialPais);
    const[isLoading, setIsLoading]= useState(false);
    const[error, setError]= useState<Error| null>(null);

    useEffect(()=> {
        if (!namePais.trim()) return;
        
        (async() =>{
            setIsLoading(true);
            setError(null);
            try{
                const paisResponse = await getPaisNombre(namePais);
                setPais(paisResponse);
            }catch(e){
                setError(e as Error);
            }finally{
                setIsLoading(false);
            }
        })();
    },[namePais]);
    
    return {pais, isLoading, error}
};