import React,{useState} from 'react'

export default function OrdenarTarefas(props){

  const [isFiltroVisible,setIsFiltroVisible]=useState(false);

  const handOpenFiltro=()=>{
    setIsFiltroVisible(true);
  }

  const handCloseFiltro=()=>{
    setIsFiltroVisible(false);
  }

    return(
        <>
          <button className='order-button' onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>swap_vert</i>Ordenar</button>
          {isFiltroVisible &&(
              <div className='order'>
                <p className='order-title'>Ordem de Exibição:</p>
                <div className='order-buttons'>
                  <button className='order-button-asc' onClick={()=> props.setSort("Asc")}>A - Z</button>
                  <button className='order-button-desc' onClick={()=> props.setSort("Desc")}>Z - A</button>
                </div>
              </div>
          )}
          
        </>
    )
}