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
          <button className='filter-button' onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>tune</i> Filtro</button>
          {isFiltroVisible &&(
            <div className='filter-div'>
              <div className='filter'>
                <div className='filter-close'><button className='filter-close-button material-symbols-outlined' onClick={handCloseFiltro}>close</button></div>
                <p className='filter-p'>Filtro de Tarefas</p>
                <div className='filters'>
                  <div className='filters-status'>
                    <p className='status-title'>Status: </p>
                    <select className='status-select' value={props.fstatus} onChange={(e)=> props.setFstatus(e.target.value)}>
                      <option className='status-option-all' value='All'>Todos</option>
                      <option className='status-option-feito' value='Feito'>Feito</option>
                      <option className='status-option-emAndamento' value='EmAndamento'>Em andamento</option>
                      <option className='status-option-parado' value='Parado'>Parado</option>
                      <option className='status-option-naoIniciado' value="NaoIniciado">Não iniciado</option>
                    </select>
                  </div>
                  <div className='filters-priority'>
                    <p className='priority-title'>Prioridade: </p>
                    <select className='priority-select' value={props.fpriority} onChange={(e)=> props.setFpriority(e.target.value)}>
                      <option className='priority-option-all' value='All'>Todos</option>
                      <option className='priority-option-critico' value='Critico'>Crítico</option>
                      <option className='priority-option-alta' value='Alta'>Alta</option>
                      <option className='priority-option-media' value='Media'>Media</option>
                      <option className='priority-option-baixa' value="Baixa">Baixa</option>
                      <option className='priority-option-semPrioridade' value="SemPrioridade">Sem Prioridade</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}  
        </>
    )
}