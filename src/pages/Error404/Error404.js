import './Error404.css'

function Error404() {
    return (
      <div>
        <header className="headerError404">
            <a href='/'><img src="/icons/logoDarmLabs.jpg" alt="Logo Darm Labs" style={{height:'5vh'}}/></a>
        </header>
        <div className='divError404'>
            <p>Erro 404 - Está página não foi encontrada em nossos servidores</p>
            <a href='/'>
                <div className='divError404Link'>
                    <p>Voltar para <b>página inicial</b></p>
                    <img src='/icons/link-external-01-svgrepo-com.svg' alt='' style={{height:'2vh'}}/>
                </div>
            </a>
        </div>
        <div className='divImgError404'>
            <img src='/icons/quizzing-svgrepo-com.svg' alt='' className='imgError404'/>
        </div>
        
      </div>
    );
  }
  
  export default Error404;