import Campeao from '../Campeao';
import './Time.css';

const Time = (props)=>{
    return (
        (props.membros.length > 0)?<section className='Time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='membros'>
                {props.membros.map(membro => <Campeao corPrimaria={props.corPrimaria} key={membro.campeao} nome={membro.campeao} classeCampeao={membro.classe} imagem={membro.imagem}/>)}
             </div>
        </section>
        : ''
    )       
}

export default Time;