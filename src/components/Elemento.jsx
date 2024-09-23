import React,{useState} from 'react'

export default function Elemento(props){
    
    const removeElemento=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id !== id ? dado : null);
        props.setDados(filterDados);
    }


    const completedElemento=(id)=>{
        const newDados=[...props.dados]
        newDados.map((elemento)=>elemento.id === id ? elemento.isCompleted = !elemento.isCompleted : elemento)
        props.setDados(newDados);
    }

    const editarElemento=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id === id ? dado : null);
        const naoEditado=[...props.dados]
        const filternaoEditado=naoEditado.filter(dado => dado.id !== id ? dado : null);
        props.setDadosEdit(filterDados);
        props.setDados(filternaoEditado);
    }
    
    return(
        <>
            <div className='tarefa' style={{textDecoration: props.todo.isCompleted ? "line-through" : "", backgroundColor: props.todo.isCompleted ? "#85e95d" : "#E9BC5D"}}>
                <div>
                    <p>{props.todo.text}</p>
                </div>
                <div className='tarefa-buttons'>
                    <button id="btnConcluir" className="material-symbols-outlined" onClick={()=> completedElemento(props.todo.id)}>done</button>
                    <button id="btnEditar" className="material-symbols-outlined" onClick={()=> editarElemento(props.todo.id)}>edit</button>
                    <button id="btnExcluir" className="material-symbols-outlined" onClick={()=> removeElemento(props.todo.id)}>close</button>
                </div>
            </div>
        </>
    )
}