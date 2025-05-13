import { useState } from "react";
import {deletePais } from "../services/deletePais"; // Importa los servicios de la API


export const useDeletePais = () => {
    const[isPending, setIsPending] = useState(false);
    const[error, setError] = useState<Error | null>(null);
    
    const remove = async(idDelete : number) =>{

        if (!idDelete) return; 
        setError(null);
        setIsPending(true);
            try{
                await deletePais(idDelete);
            }catch(err){
                setError(err as Error);
                throw err;
            }finally{
                setIsPending(false)
            }
        }
    return {remove, isPending, error};
}