import './Formulario.css';
import CampoTexto from '../CampoTexto'; 
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const classes= [
        'Assassino','Mago','Lutador','Atirador', 'Suporte','Tanque'
    ]

    const [campeao, setCampeao] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar=(evento)=>{
        evento.preventDefault();
        props.aoMembroCadastrado({
            campeao,
            classe,
            imagem,
            time
        })
        setCampeao('')
        setClasse('')
        setImagem('')
        setTime('')
    }

    return <>
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Campeão" 
                    placeholder="Digite seu campeão" 
                    valor = {campeao}
                    aoAlterado = {valor => setCampeao(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Classe" 
                    itens={classes}
                    valor={classe}
                    aoAlterado={ valor => setClasse(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Endereço da imagem. ex: https://..." 
                    valor = {imagem}
                    aoAlterado = { valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={ valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    </>
}

export default Formulario;