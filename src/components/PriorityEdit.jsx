import React,{ useState, useEffect } from "react";

export default function PriorityEdit(props){
    const [priority,setPriority]=useState('');
    useEffect(() => {
        if (priority) {
            const updatedDados = props.dados.map(dado => {
                if (dado.id === props.priorityEdit.id) {
                    return {
                        ...dado,
                        priority,
                    };
                }
                console.log(props.priorityEdit);
                console.log(dado);
                return dado;
            });
            console.log(updatedDados);
            props.setDados(updatedDados);
            props.setPriorityEdit(null);
            setPriority('');
        }
    }, [priority]);
    
    return(
        <div className="priority-editor">
            {props.priorityEdit &&(
                <div className="priority-editor-buttons">
                    <button onClick={() => setPriority('Critico')}>Critico</button>
                    <button onClick={() => setPriority('Alta')}>Alta</button>
                    <button onClick={() => setPriority('Media')}>Media</button>
                    <button onClick={() => setPriority('Baixa')}>Baixa</button>
                    <button onClick={() => setPriority('Sem prioridade')}>Sem prioridade</button>
                </div>
            )}
        </div>
    )
}