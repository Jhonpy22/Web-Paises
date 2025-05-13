import { useState, useEffect } from "react";
import { usePutPais } from "../../paises/hooks/usePutPais";
import { useGetPaisNombre } from "../../paises/hooks/useGetPaisNombre";
import { PaisErroresState } from "../../paises/models/initial-state/PaisErroresState";
import {Pais} from '../../paises/models/types/Pais'
import FormUpdatePais from '../../components/pais-update/PaisUpdateCard' 
import { InitialPais } from "../../paises/models/initial-state/PaisState";
import { PaisErrores } from "../../paises/models/types/PaisErrores";


const PaisUpdate = () => {
    const [nombreBuscar, setNombreBuscar] = useState('');
    const [nombreInput, setNombreInput] = useState('');

    const {put, isPending: PendingPut, error: errorPut}= usePutPais();
    const {pais: paisCargado, isLoading: loadingGet, error: errorGet} = useGetPaisNombre(nombreBuscar);

    const [errores, setErrores]= useState<PaisErrores>(PaisErroresState);
    const [success, setSuccess]= useState(false);
    const [pais, setPais]=useState<Pais>(InitialPais);
    
    
    const buscarPais = () => {
        if (nombreInput.trim() !== '') {
            setNombreBuscar(nombreInput.trim());
        }
    };

    const actualize = async () =>{
        try{
            if (pais.id <= 0) {
                alert('Seleccione un país válido para editar.');
                return;
            }    
            if (pais.nombrePais?.trim()==='' ){
                setErrores({
                    imageURL:'Debes poner una imagen del pais',
                    nombrePais:'El nombre del país no puede estar vacío',
                    nombreCapital:'El nombre de la Capital no puede estar vacío'
                });
                return;
            }
            await put(pais.id, pais);
            setSuccess(true);
            setPais(InitialPais);
            setErrores(PaisErroresState);
            setTimeout(() => setSuccess(false), 3000);
        }catch(e){
            setErrores(PaisErroresState);
            console.error(e);
        }

    }
    useEffect(()=> {
        if(paisCargado && paisCargado.id !== 0 && paisCargado.id !== pais.id){
            setPais(paisCargado);
        }
    }, [paisCargado, pais.id]);
    
    

    return(
        <>
            <div className="btninput">
                <input
                    type="text"
                    className="inputBusqueda"
                    placeholder="Digite el pais a buscar"
                    value={nombreInput}
                    onChange={(e) => setNombreInput(e.target.value)}    
                />
                <button  className="buscarBtn" onClick={buscarPais} disabled={nombreInput.trim()===''}>Buscar Pais</button>
                    
            </div>
            {loadingGet && <p className="loadingText">Cargando país...</p>}
            {errorGet && <p className="errorText">Error buscando el pais: {errorGet.message}</p> }

            {PendingPut && <p className="loadingText">Cargando...</p>}
            {errorPut && <p className="errorText">Error al editar el pais {errorPut.message}</p>}
            
            <FormUpdatePais
                pais={pais}
                setPais={setPais}
                errores={errores}
                setPaisErrores={setErrores}
                actualizar={actualize}
            />
                {success && <p className="successText">¡País actualizado con éxito!</p>}
        </>
    )
}

export default PaisUpdate;