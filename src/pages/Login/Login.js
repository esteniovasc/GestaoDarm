import './Login.css'

function Login() {
    return (
     <div className="bodyLogin">
        <img src="/icons/logoFull.jpg" alt="" />
        <button className='buttonLoginByGoogle'>Fazer login com Google</button>
        <a href="/dashboard">ENTRAR</a>
     </div>
    );
  }
  
export default Login;