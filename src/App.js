
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
function App() {

  const times = [
    {
      nome:'Demacia warriors', 
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Penta kill team',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Arcane Champions',
      corPrimaria:'#D86EBF',
      corSecundaria: '#FDE7E8',
    },
    {
      nome:'Noxus Empire',
      corPrimaria:'#FEBA05',
      corSecundaria: '#FFF5D9',
    }
    
  ]

  const [membros, setMembros]= useState([])
  
  const aoNovoMembroAdicionado = (membro)=>{
      setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}   aoMembroCadastrado = {campeao =>  aoNovoMembroAdicionado(campeao)}/>

      { times.map(time=> <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} membros={membros.filter(membro => membro.time === time.nome)}/>)}
    </div>
  );
}

export default App;
