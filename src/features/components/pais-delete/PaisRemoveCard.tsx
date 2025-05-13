

type PaisRemoveProps = {
    showConfirm:boolean;
    setShowConfirm: (value:boolean) => void;
    handleRemove: () => void;
    nombrePais: string;
}

const RemovePais = ({ showConfirm, setShowConfirm, handleRemove, nombrePais}: PaisRemoveProps) =>{
    return(
        <>
            <div className="btnCentrar">
                {!showConfirm ?(<button className="deleteBtn" onClick={() => setShowConfirm(true)}>Eliminar Pais</button>
    
                ):(
                    <div className="confirmBox">
                        <p className="mensajeDel">¿Estás seguro de eliminar <strong>{nombrePais}</strong>?</p>
                        <div className="actions">
                        <button  className="confirm" onClick={handleRemove}>Eliminar</button>
                        <button  className="cancel" onClick={() => setShowConfirm(false)}>Cancelar</button>
                        </div>
                    </div>
                    
                )}
            </div>
        </>
    )
}

export default RemovePais;
