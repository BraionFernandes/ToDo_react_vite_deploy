import React,{useState} from 'react'

export default function Elemento(props){
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
            <tr className='tabela-body-linha'>
                <td className='tabela-body-coluna-tarefa'>{props.todo.text}<button className='elemento-configurar' onClick={()=> editarElemento(props.todo.id)}><i className='material-symbols-outlined'>open_in_full</i> Abrir</button></td>
                <td className='tabela-body-coluna-status'>{props.todo.status}</td>
                <td className='tabela-body-coluna-dataini'>{props.todo.dataIni === "" ? "Não Definido" : props.todo.dataIni}</td>
                <td className='tabela-body-coluna-datater'>{props.todo.dataTer === "" ? "Não Definido" : props.todo.dataTer}</td>
                <td className='tabela-body-coluna-prioridade'>{props.todo.priority}</td>
            </tr>
        </>
    )
}