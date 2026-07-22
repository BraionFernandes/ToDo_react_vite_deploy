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
      <button className='filter--button' onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>tune</i> Filtro</button>
      {isFiltroVisible &&(
        <div className='filter--container'>
          <div className='filter'>
            <div className='filter--close--div close--div'><button className='filter--close--button close--button material-symbols-outlined' onClick={handCloseFiltro}>close</button></div>
            <p className='filter--tittle'>Filtro de Tarefas</p>
            <div className='filters'>
              <div className='filters--status'>
                <p className='filters--status--title'>Status: </p>
                <select className='filters--status--select' value={props.fstatus} onChange={(e)=> props.setFstatus(e.target.value)}>
                  <option className='filters--status--option--all' value='All'>Todos</option>
                  <option className='filters--status--option--feito' value='Feito'>Feito</option>
                  <option className='filters--status--option--emAndamento' value='EmAndamento'>Em andamento</option>
                  <option className='filters--status--option--parado' value='Parado'>Parado</option>
                  <option className='filters--status--option--naoIniciado' value="NaoIniciado">Não iniciado</option>
                </select>
              </div>
              <div className='filters--priority'>
                <p className='filters--priority--title'>Prioridade: </p>
                <select className='filters--priority-select' value={props.fpriority} onChange={(e)=> props.setFpriority(e.target.value)}>
                  <option className='filters--priority--option--all' value='All'>Todos</option>
                  <option className='filters--priority--option--critico' value='Critico'>Crítico</option>
                  <option className='filters--priority--option--alta' value='Alta'>Alta</option>
                  <option className='filters--priority--option--media' value='Media'>Media</option>
                  <option className='filters--priority--option--baixa' value="Baixa">Baixa</option>
                  <option className='filters--priority--option--semPrioridade' value="SemPrioridade">Sem Prioridade</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}  
    </>
  )
}