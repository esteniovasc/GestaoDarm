import './AvailableTimes.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function AvailableTimes() {

    const [dados, setDados] = useState([]);
    const [disponibilidade, setDisponibilidade] = useState({});

    const SPREADSHEET_ID = '18P-pC2CvbRJOni_xhPbBIPIa-Aiw7wHtZBH0NCh3Ias'; // Substitua pelo seu ID da planilha
    const RANGE = 'HorariosTeste!A1:E16'; // Substitua pelo seu range
    const API_KEY = 'AIzaSyD7jFj1Byww74AQufeCsjsWjS31RseksOc'; // Adicione sua chave da API

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
                setDados(data.values);
                console.log(dados);
                
            } catch (error) {
                console.error("Erro ao buscar dados da planilha:", error);
            }
        };

        fetchData();

    }, []); // O array vazio faz com que a requisição seja feita apenas uma vez, ao montar o componente.

    useEffect(() => {
        if (dados.length > 0) {
            calcularDisponibilidade();
        }
    }, [dados]);

    const calcularDisponibilidade = () => {
        //const hoje = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'

        const hoje = new Date().toLocaleDateString("pt-BR"); // Formato 'DD/MM/YYYY'
        const qtdCadeirasLaboratorio = 15; // Total de cadeiras

        
        console.log(hoje);
        const dadosHoje = dados.slice(1).filter(linha => linha[0] === hoje); // Exclui cabeçalho
        console.log(dados);
        console.log(dadosHoje);

        const disponibilidadeFormatada = dadosHoje.map((linha) => {
            const [data, turno, modeloTrabalho, quemVaiEstar, qtdPessoas] = linha;
            const qtdLivres = qtdCadeirasLaboratorio - Number(qtdPessoas);

            return `${turno}: ${qtdLivres}`;
        });

        setDisponibilidade(disponibilidadeFormatada);
    };

    return (
      <div>
         {disponibilidade.length > 0 ? (
                disponibilidade.map((info, index) => (
                    <p key={index}>{info}</p>
                ))
            ) : (
                <p>Nenhuma disponibilidade encontrada para hoje.</p>
            )}
      </div>
    );
  }
  
  export default AvailableTimes;