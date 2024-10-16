import React, { useState, useEffect } from "react";

export default function StatusEdit(props) {
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (status) {
            const updatedDados = props.dados.map(dado => {
                if (dado.id === props.statusEdit.id) {
                    return {
                        ...dado,
                        status,
                    };
                }
                return dado;
            });
            props.setDados(updatedDados);
            props.setStatusEdit(null);
            setStatus('');
        }
    }, [status]);

    return (
        <>
            {props.statusEdit &&(
                <div className="status-editor">
                    <div className="status-container">
                        <div className='editor-close'>
                            <button className='editor-close-button material-symbols-outlined' onClick={()=> props.setStatusEditClose(true)}>
                                close
                            </button>
                        </div>
                        <div className="status-editor-buttons">
                            <button className="status-editor-feito" onClick={() => setStatus('Feito')}>Feito</button>
                            <button className="status-editor-emAndamento" onClick={() => setStatus('Em andamento')}>Em andamento</button>
                            <button className="status-editor-parado" onClick={() => setStatus('Parado')}>Parado</button>
                            <button className="status-editor-naoIniciado" onClick={() => setStatus('Nao iniciado')}>Não iniciado</button>
                        </div>
                    </div>
                </div>
            )}  
        </>
    );
}