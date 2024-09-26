import React,{useState} from 'react'

export default function FiltrarTarefas(props){

  const [isFiltroVisible,setIsFiltroVisible]=useState(false);

  const handOpenFiltro=()=>{
    setIsFiltroVisible(true);
  }

  const handCloseFiltro=()=>{
    setIsFiltroVisible(false);
  }

    return(
        <>
          <button className='divFilter-button' onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>tune</i> Filtro</button>
          {isFiltroVisible &&(
            <div className='filter'>
              <div className='filter-status'>
                <p>Status: </p>
                <select value={props.fstatus} onChange={(e)=> props.setFstatus(e.target.value)}>
                  <option value='All'>Todos</option>
                  <option value='Feito'>Feito</option>
                  <option value='EmAndamento'>Em andamento</option>
                  <option value='Parado'>Parado</option>
                  <option value="NaoIniciado">Não iniciado</option>
                </select>
                <p>Prioridade: </p>
                <select value={props.fpriority} onChange={(e)=> props.setFpriority(e.target.value)}>
                  <option value='All'>Todos</option>
                  <option value='Critico'>Crítico</option>
                  <option value='Alta'>Alta</option>
                  <option value='Media'>Media</option>
                  <option value="Baixa">Baixa</option>
                  <option value="SemPrioridade">Sem Prioridade</option>
                </select>
              </div>
            </div>
          )}  
        </>
    )
}