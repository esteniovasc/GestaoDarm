import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = ({ setUser }) => {

  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const token = response.credential;
    const userData = {
      token: token,
      profile: jwtDecode(token), // Decodificar o token para obter mais informações do usuário
    };
    
    // Aqui você pode processar o token, por exemplo, para autenticar no back-end
    console.log(userData);

    setUser(userData); // Armazena as informações do usuário

    localStorage.setItem('user', JSON.stringify(userData));

    navigate('/dashboard');
  };

  const handleError = () => {
    console.log('Falha na autenticação');
  };

  return (
    <div className="bodyLogin">
        <img src="/icons/logoFull.jpg" alt="" />
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
     </div>
    
  );
};

export default Login;