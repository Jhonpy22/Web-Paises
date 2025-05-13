import {postPais} from '../services/postPais';
import { useState } from 'react';
import { Pais } from "../models/types/Pais";
import { InitialPais } from '../models/initial-state/PaisState';



export const usePostPais =() =>{
    const [pais, setPais] = useState<Pais>(InitialPais);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<Error | null>(null);

        const post = async (nuevoCountry: Pais) => {
            setError(null);//  Limpiar estados previos
            setIsPending(true)
                
                try{
                    const paisResponse = await postPais(nuevoCountry);
                    setPais(paisResponse);
                }catch(err){
                    setError(err as Error);
                    throw err;
                }finally{
                    setIsPending(false); // Siempre se ejecuta, haya error o no
                }
            }
    return {post ,pais, isPending, error};
}
