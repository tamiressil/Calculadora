import React, {useState, useEffect} from "react";

//useEffect ele att  o resultado sempre que tier uma mudança nos valores de numeroUm, numeroDois ou operacao.

function Calculadora(){
    const [numeroUm, setNumeroUm] = useState(0);
    const [numeroDois, setNumeroDois] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [operacao, setOperacao] = useState('Soma');

    const calcular = () => {
        if(operacao == "Soma")
            return parseFloat(numeroUm) + parseFloat(numeroDois);
        else if (operacao == "Subtração")
            return parseFloat(numeroUm) - parseFloat(numeroDois);
        else if (operacao == "Multiplicação")
            return parseFloat(numeroUm) * parseFloat(numeroDois);
        else if (operacao === "Divisão")
            return parseFloat(numeroUm) / parseFloat(numeroDois);
    }

    useEffect(() => {
        setResultado(calcular) //o que a função Calcular retornar, será o setResultado
    }, [numeroUm, numeroDois, operacao]); //<- variáveis destacadas pois mudará o resultado quando mudarem



    return(
        <div>
            <h2>Calculadora</h2>
            <label>Primeiro número</label> 
            <input type="number" value={numeroUm} onChange={(e) => setNumeroUm(e.target.value)}/> 
            <label>Segundo número</label>
            <input type="number" value={numeroDois} onChange={(e) => setNumeroDois(e.target.value)}/>
            <label>Primeiro número</label>
            

            <select onChange={(e) => setOperacao(e.target.value)}>
                <option>Soma</option>
                <option>Subtração</option>
                <option>Multiplicação</option>
                <option>Divisão</option>
            </select>

    
            <label className="resultado">Resultado: {resultado}</label>
        </div>
    )
}


export default Calculadora;