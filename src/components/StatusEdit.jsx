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
                <div className="status--editor">
                    <div className="status--editor--container">
                        <div className='status--editor--close--div close--div'>
                            <button className='status--editor--close--button close--button material-symbols-outlined' onClick={()=> props.setStatusEditClose(true)}>
                                close
                            </button>
                        </div>
                        <div className="status--editor--buttons">
                            <button className="status--editor--button--feito" onClick={() => setStatus('Feito')}>Feito</button>
                            <button className="status--editor--button--emAndamento" onClick={() => setStatus('Em andamento')}>Em andamento</button>
                            <button className="status--editor--button--parado" onClick={() => setStatus('Parado')}>Parado</button>
                            <button className="status--editor--button--naoIniciado" onClick={() => setStatus('Nao iniciado')}>Não iniciado</button>
                        </div>
                    </div>
                </div>
            )}  
        </>
    );
}