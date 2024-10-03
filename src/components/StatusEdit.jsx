import React,{ useState, useEffect } from "react";

export default function StatusEdit(props){
    const [status,setStatus]=useState('');
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
    return(
        <div className="status-editor">
            {props.statusEdit &&(
                <div className="status-editor-formDiv">
                    <button onClick={() => setStatus('Feito')}>Feito</button>
                    <button onClick={() => setStatus('Em andamento')}>Em andamento</button>
                    <button onClick={() => setStatus('Parado')}>Parado</button>
                    <button onClick={() => setStatus('Nao iniciado')}>Não iniciado</button>
                </div>
            )}
        </div>
    )
}