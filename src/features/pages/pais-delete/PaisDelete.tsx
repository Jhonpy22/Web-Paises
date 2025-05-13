import { useState } from "react";
import { useGetPaisNombre } from "../../paises/hooks/useGetPaisNombre";
import { useDeletePais } from "../../paises/hooks/useDeletePais";
import RemovePais from "../../components/pais-delete/PaisRemoveCard";


const PaisRemove = ()=>{

    const[nombreBuscar, setNombreBuscar] = useState ('');
    const[nombreInput , setNombreInput] = useState ('');

    const{pais: paisCargado, isLoading : loadingGet, error: errorGet} = useGetPaisNombre(nombreBuscar);
    const{remove ,isPending: pendingRemove, error: errorRemove} = useDeletePais();
    const[success, setSuccess]= useState(false);
    const[showConfirm, setShowConfirm] = useState(false);

    const buscarPais = () => {
        if(nombreInput.trim() !== ''){
            setNombreBuscar(nombreInput.trim());
            
        }
    }

    const handleRemove = async () => {
            if (paisCargado.id <= 0) {
                alert('Seleccione un país válido para eliminar.');
                return;
            }
            try{
            await remove(paisCargado.id);
                setSuccess(true);
                setShowConfirm(false);
                setTimeout(() => setSuccess(false), 3000);
            }catch(e){
                console.error(e);
            }
    }

    return(
        <>
            <div className="btninput">
                
                    <input
                        className="inputBusqueda"
                        type="text"
                        placeholder="Digite el pais a buscar"
                        value={nombreInput}
                        onChange={(e) => setNombreInput(e.target.value)}    
                    />
                    <button  className="buscarBtn" onClick={buscarPais} disabled={nombreInput.trim()===''}>Buscar Pais</button>
            </div> 
                {loadingGet && <p className="loadingText">Cargando país...</p>}
                {paisCargado.id > 0 && (
                    <p className="paisEncontrado">País encontrado: <strong>{paisCargado.nombrePais}</strong></p>)}

                {errorGet && <p  className="errorText">Error buscando el pais: {errorGet.message}</p>}

                {pendingRemove && <p className="loadingText">Eliminando Pais...</p>}
                {errorRemove && <p className="errorText">Error al eliminar el pais {errorRemove.message}</p>}

                <RemovePais
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
                handleRemove={handleRemove}
                nombrePais={paisCargado.nombrePais}
                />
            {success && <p  className="successText">¡Pais eliminado con éxito!</p>}
        </>
    )
}

export default PaisRemove