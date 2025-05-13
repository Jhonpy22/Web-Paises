import { useEffect, useState } from "react";
import {getPais } from "../services/getPais"; // Importa los servicios de la API
import { Pais } from "../models/types/Pais";




export const useGetPais=()=> { 
    const [paises, setPais] = useState<Pais[]>([]) /*Un arreglo de pais y ([])se inicialia vacio*/
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() =>{/*Importante: useEffect se ejecuta después del render inicial para no bloquear la carga del DOM*/
        (async () =>{
            setIsLoading(true);
            try{
            const pais = await getPais();
            setPais(pais); //Actualiza el estado con los datos obtenidos
            }catch(err){
                setError(err as Error)
            }finally{
            setIsLoading(false);
            }
        })();
    },[]) // Se ejecuta solo una vez al montar el componente; si está lleno se vuelve a ejecutar porque lo necesita pintar de nuevo

    return {paises, isLoading, error};// Inicialmente devuelve un array vacío hasta que los datos se carguen en useEffect
    }



