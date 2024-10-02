import React,{useState} from 'react'
import StatusConfig from './statusConfig';

export default function Elemento(props){
    const [statusVisible,setStatusVisible]=useState('');

    const OpenStatus=()=>{
        setStatusVisible(true);
    }
    
    const CloseStatus=()=>{
        setStatusVisible(false);
    }
    const statusColor = (status) => {
        switch (status) {
            case 'Feito':
            return '#80b918';
            case 'Em andamento':
            return '#f5cc00';
            case 'Parado':
            return '#9d0208';
            case 'Nao iniciado':
            return '#495057';
            default:
            return 'transparent';
        }
    };
    const priorityColor = (priority) => {
        switch (priority) {
            case 'Critico':
            return '#10002b';
            case 'Alta':
            return '#3c096c';
            case 'Media':
            return '#7b2cbf';
            case 'Baixa':
            return '#c77dff';
            case 'Sem prioridade':
            return '#495057';
            default:
            return 'transparent';
        }
    };
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
            <tr className='body-linha'>
                <td className='body-coluna-tarefa'><div>{props.todo.text}<button className='tarefa-config' onClick={()=> editarElemento(props.todo.id)}><i className='material-symbols-outlined'>open_in_full</i> Abrir</button></div></td>
                <td className='body-coluna-status' style={{backgroundColor: statusColor(props.todo.status)}} onClick={statusVisible ? CloseStatus : OpenStatus}>{props.todo.status}{statusVisible &&(
                    <StatusConfig/>
                )}</td>
                <td className='body-coluna-dataini'>{props.todo.dataIni === "" ? "Não Definido" : props.todo.dataIni}</td>
                <td className='body-coluna-datater'>{props.todo.dataTer === "" ? "Não Definido" : props.todo.dataTer}</td>
                <td className='body-coluna-prioridade' style={{backgroundColor: priorityColor(props.todo.priority)}}>{props.todo.priority}</td>
            </tr>
        </>
    )
}