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
          <button onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>swap_vert</i>Ordenar</button>
          {isFiltroVisible &&(
              <div className='ordenador'>
                <p>Ordem de Exibição:</p>
                <div className='ordenador-buttons'>
                  <button onClick={()=> props.setSort("Asc")}>A - Z</button>
                  <button onClick={()=> props.setSort("Desc")}>Z - A</button>
                </div>
              </div>
          )}
          
        </>
    )
}