import './Campeao.css';

const Campeao = (props) =>{
    return<>
        <div className='Campeao'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img  src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.classeCampeao}</h5>
            </div>
        </div>
    </>
}

export default Campeao;