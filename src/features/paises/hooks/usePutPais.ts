import {  useState } from "react";
import {putPais } from "../services/putPais"; // Importa los servicios de la API
import { Pais } from "../models/types/Pais";



export const usePutPais = () => {

    const [isPending, setIsPending]= useState(false);
    const [error, setError] = useState<Error | null>(null);

    const put = async(idUpdate: number, changePais:Pais)=>{
        if (idUpdate <= 0) return; //evita actualizar los datos de un id que no existe || Si no hay un id válido (>0), no lanza la petición PUT
        
        setError(null);
        setIsPending(true);
            
        try{
            
            await putPais(idUpdate, changePais);
                
            }catch(e){
                setError(e as Error);
                throw e;
            }finally{
                setIsPending(false);
            }
        };
    
    return {put, isPending, error}
};