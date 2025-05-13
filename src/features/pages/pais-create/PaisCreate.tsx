import { usePostPais } from "../../paises/hooks/usePostPais";
import { useState } from "react";
import FormularioPais from '../../components/pais-create/PaisCreateCard'
import { PaisErroresState } from "../../paises/models/initial-state/PaisErroresState";
import { PaisFormState } from "../../paises/models/initial-state/PaisFormState";
import { PaisErrores } from "../../paises/models/types/PaisErrores";
import { PaisForm } from "../../paises/models/types/PaisForm";

const PaisCreate = () => {
    const [errores, setErrores] = useState<PaisErrores>(PaisErroresState);
    const [success, setSuccess] = useState(false);
    const [paisFormState, setPaisFormState] = useState<PaisForm>(PaisFormState);
    const {post, isPending, error}= usePostPais();

    const handleEnviar = async () =>{
        try{
            setSuccess(false);

            if (paisFormState.nombrePais.trim() === '') { //trim elimina los espacios, si el input está vacío o tiene solo espacios, se considera inválido.
                setErrores({ 
                    imageURL:'Necesitas llenar este campo',
                    nombrePais: 'El nombre del país es obligatorio.',
                    nombreCapital:'El nombre de la capital es obligatorio',
                });
                return; // No enviar si hay error
            }
            const nuevoPais = {
                id:0,
                imageURL:paisFormState.imageURL,
                nombrePais:paisFormState.nombrePais, 
                nombreCapital:paisFormState.nombreCapital,
            }
            console.log("Enviando país:", nuevoPais);

            await post (nuevoPais);
            setSuccess(true);
            setPaisFormState(PaisFormState);
            setErrores(PaisErroresState);
            setTimeout(() => setSuccess(false), 3000);
        }catch (e){
            setPaisFormState(PaisFormState); 
            setErrores(PaisErroresState);
            console.error(e);
        };
    }

    return(
        <>
            {isPending && <p className="loadingText">Enviando datos...</p>}
            {error && <p  className="errorText">Error al ingresar un nuevo País: {error.message}</p>}
            <FormularioPais
                paisFormState={paisFormState}
                setPaisFormState={setPaisFormState}
                errores={errores}
                setPaisErrores={setErrores}
                enviar={handleEnviar}
            />
            {success && <p className="successText">¡País creado con éxito!</p>}
        </>
    );
};

export default PaisCreate;