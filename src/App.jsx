import './assets/css/App.css'
import { useState } from 'react'
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
        <picture className='header-logo'>
          <img className='header-logo-img' src="./src/assets/img/taskifyLogo.png" alt="Empire Logo" />
        </picture>
        <nav className='header-nav'>
          <ul className='header-nav-lista'>
            <li className='header-nav-lista-item'><a href="#" className='material-symbols-outlined'>history</a></li>
            <li className='header-nav-lista-item'><a href="#" className='material-symbols-outlined'>help</a></li>
            <li className='header-nav-lista-item'><a href="#" className='material-symbols-outlined'>settings</a></li>
            <li className='header-nav-lista-item'><a href="#" className='material-symbols-outlined'>account_circle</a></li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <aside className='tarefaTools'>
          <div className='tarefaTools-divCreator'>
            <button className='creator-button' onClick={handleOpenForm}>Criar Tarefa</button>
          </div>
          <div className='tarefaTools-divSearch'>
            <PesquisarTarefas dados={dados} search={search} setSearch={setSearch}/>
          </div>
          <div className='tarefaTools-divFilter'>
            <FiltrarTarefas fstatus={fstatus} setFstatus={setFstatus} fpriority={fpriority} setFpriority={setFpriority}/>
          </div>
          <div className='tarefaTools-divOrder'>
            <OrdenarTarefas setSort={setSort}/>
          </div>
        </aside>
        <section className='tarefas'>
          <div className='tarefasRegistradas'>
            <table className='tarefas-tabela'>
              <thead className='tabela-head'>
                <tr className='head-linha'>
                  <th className='head-coluna-tarefa'>TAREFA</th>
                  <th className='head-coluna-status'>STATUS</th>
                  <th className='head-coluna-dataini'>DATA INICIO</th>
                  <th className='head-coluna-datater'>DATA TERMINO</th>
                  <th className='head-coluna-prioridade'>PRIORIDADE</th>
                </tr>
              </thead>
              <tbody className='tabela-body'>
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
          <div className='editorDiv'>
            <Editor dadosEdit={dadosEdit} setDadosEdit={setDadosEdit} dados={dados} setDados={setDados}/>
          </div>
        )}
        {isFormVisible &&(
          <div className='creatorDiv'>
              <GerenciadorTarefas dados={dados} setDados={setDados} status={status} setStatus={setStatus} priority={priority} setPriority={setPriority} setIsFormVisible={setIsFormVisible}/>
          </div>
        )}
    </>
  )
}

export default App