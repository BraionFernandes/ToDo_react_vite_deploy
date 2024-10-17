import { useState } from 'react'

import './assets/css/App.css'
import './assets/css/media-querie.css'

import Editor from './components/Editor.jsx'
import GerenciadorTarefas from './components/GerenciadorTarefas.jsx'
import PesquisarTarefas from './components/PesquisarTarefas.jsx'
import FiltrarTarefas from './components/FiltrarTarefas.jsx'
import OrdenarTarefas from './components/OrdenarTarefas.jsx'
import Elemento from './components/Elemento.jsx'

import {bancoDados} from './assets/js/bancoDados.js'
import {bancoEditor} from './assets/js/bancoEditor.js'

function App() {
  const [dados,setDados]=bancoDados();
  const [dadosEdit,setDadosEdit]=bancoEditor();

  const [search,setSearch]=useState("");
  const [fstatus,setFstatus]=useState("All");
  const [fpriority,setFpriority]=useState("All");
  const [status,setStatus]=useState('');
  const [priority,setPriority]=useState('');
  const [sort,setSort]=useState("Asc");

  const [isFormVisible,setIsFormVisible]=useState(false);

  const handleOpenForm=()=>{
    setIsFormVisible(true);
  }
  return (
    <>
      <header className='header'>
        <picture className='header--picture'>
          <img className='header--picture--logo' src="./src/assets/img/taskifyLogo.png" alt="Empire Logo" />
        </picture>
      </header>
      <main className='main'>
        <aside className='todo--config'>
          <div className='todo--config--creator'>
            <button className='creator--button' onClick={handleOpenForm}>Criar Tarefa</button>
          </div>
          <div className='todo--config--search'>
            <PesquisarTarefas dados={dados} search={search} setSearch={setSearch}/>
          </div>
          <div className='todo--config--filter'>
            <FiltrarTarefas fstatus={fstatus} setFstatus={setFstatus} fpriority={fpriority} setFpriority={setFpriority}/>
          </div>
          <div className='todo--config--order'>
            <OrdenarTarefas setSort={setSort}/>
          </div>
        </aside>
        <section className='tarefas'>
          <div className='tarefas--registradas'>
            <table className='tabela'>
              <thead className='tabela--head'>
                <tr className='tabela--head--linha'>
                  <th className='tabela--head--coluna--tarefa'>TAREFA</th>
                  <th className='tabela--head--coluna--status'>STATUS</th>
                  <th className='tabela--head--coluna--dataini'>DATA INICIO</th>
                  <th className='tabela--head--coluna--datater'>DATA TERMINO</th>
                  <th className='tabela--head--coluna--prioridade'>PRIORIDADE</th>
                </tr>
              </thead>
              <tbody className='tabela--body'>
                {dados
                  .filter((todo) => {
                    switch (fstatus) {
                      case "All":
                          return true;
                      case "Feito":
                          return todo.status === "Feito";
                      case "Em andamento":
                          return todo.status === "Em andamento";
                      case "Parado":
                          return todo.status === "Parado";
                      case "Nao iniciado":
                          return todo.status === "Nao iniciado";
                      default:
                          return false;
                      }
                  })
                  .filter((todo) => {
                    switch (fpriority) {
                      case "All":
                          return true;
                      case "Critico":
                          return todo.priority === "Critico";
                      case "Alta":
                          return todo.priority === "Alta";
                      case "Media":
                          return todo.priority === "Media";
                      case "Baixa":
                          return todo.priority === "Baixa";
                      case "Sem prioridade":
                          return todo.priority === "Sem prioridade";
                      default:
                          return false;
                      }
                  })
                  .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
                  .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
                  .map((todo) =>
                  <Elemento key={todo.id} todo={todo} dados={dados} setDados={setDados} dadosEdit={dadosEdit} setDadosEdit={setDadosEdit}/>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
        {dadosEdit && dadosEdit.length > 0 &&(
          <div className='editor--container'>
            <Editor dadosEdit={dadosEdit} setDadosEdit={setDadosEdit} dados={dados} setDados={setDados}/>
          </div>
        )}
        {isFormVisible &&(
          <div className='creator--container'>
              <GerenciadorTarefas dados={dados} setDados={setDados} status={status} setStatus={setStatus} priority={priority} setPriority={setPriority} setIsFormVisible={setIsFormVisible}/>
          </div>
        )}
    </>
  )
}

export default App