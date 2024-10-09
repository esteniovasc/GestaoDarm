import './DateToday.css'

function DateToday(){

    const date = new Date().toLocaleDateString("pt-BR", {weekday:"long", day:"2-digit", month:"long"});

    return(
        <h4>Horário de hoje <b className="dateStyle">({`${date}`})</b></h4>
    )
}

export default DateToday;