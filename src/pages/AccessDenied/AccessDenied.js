import './AccessDenied.css'

function AccessDenied() {
    return (
      <div>
        <header className="headerAccessDenied">
            <img src="/icons/logoDarmLabs.jpg" alt="Logo Darm Labs" style={{height:'5vh'}} />
        </header>
        <div className='divAccessDenied'>
            <p>Parece que você está tentando acessar uma rota protegida</p>
            <a href='/login'>
                <div className='divAccessDeniedLink'>
                    <p>Faça <b>login</b> para continuar</p>
                    <img src='/icons/link-external-01-svgrepo-com.svg' alt='' style={{height:'2vh'}}/>
                </div>
            </a>
            
        </div>
        <div className='divImgAccessDenied'>
            <img src='/icons/cancel-svgrepo-com.svg' alt='' className='imgAccessDenied'/>
        </div>
        
      </div>
    );
  }
  
  export default AccessDenied;