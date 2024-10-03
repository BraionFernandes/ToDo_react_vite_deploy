import React,{useState} from 'react';

import StatusEdit from './StatusEdit';
import DataIniEdit from './dataIniEdit';
import DataTerEdit from './dataTerEdit';
import PriorityEdit from './PriorityEdit';

export default function Elemento(props){
    const [statusEdit,setStatusEdit]=useState(null);
    const [dataIniEdit,setDataIniEdit]=useState([]);
    const [dataTerEdit,setDataTerEdit]=useState([]);
    const [priorityEdit,setPriorityEdit]=useState([]);

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

    const editarStatus=(id)=>{
        const newDados = [...props.dados];
        const filterDados = newDados.find(dado => dado.id === id);
        setStatusEdit(filterDados);
    }

    const editarDataIni=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id === id ? dado : null);
        setDataIniEdit(filterDados);
    }

    const editarDataTer=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id === id ? dado : null);
        setDataTerEdit(filterDados);
    }

    const editarPriority=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id === id ? dado : null);
        setPriorityEdit(filterDados);
    }
    return(
        <>
            <tr className='body-linha'>
                <td className='body-coluna-tarefa'><div>{props.todo.text}<button className='tarefa-config' onClick={()=> editarElemento(props.todo.id)}><i className='material-symbols-outlined'>open_in_full</i> Abrir</button></div></td>
                <td className='body-coluna-status' style={{backgroundColor: statusColor(props.todo.status)}} onClick={()=> editarStatus(props.todo.id)}>{props.todo.status}
                    <StatusEdit statusEdit={statusEdit} setStatusEdit={setStatusEdit} dados={props.dados} setDados={props.setDados}/>
                </td>
                <td className='body-coluna-dataini' onClick={()=> editarDataIni(props.todo.id)}>{props.todo.dataIni === "" ? "Não Definido" : props.todo.dataIni}
                    <DataIniEdit dataIniEdit={dataIniEdit} setDataIniEdit={setDataIniEdit} dados={props.dados} setDados={props.setDados}/>
                </td>
                <td className='body-coluna-datater' onClick={()=> editarDataTer(props.todo.id)}>{props.todo.dataTer === "" ? "Não Definido" : props.todo.dataTer}
                    <DataTerEdit dataTerEdit={dataTerEdit} setDataTerEdit={setDataTerEdit} dados={props.dados} setDados={props.setDados}/>
                </td>
                <td className='body-coluna-prioridade' style={{backgroundColor: priorityColor(props.todo.priority)}} onClick={()=> editarPriority(props.todo.id)}>{props.todo.priority}
                    <PriorityEdit priorityEdit={priorityEdit} setPriorityEdit={setPriorityEdit} dados={props.dados} setDados={props.setDados}/>
                </td>
            </tr>
        </>
    )
}