import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './UserProfile.css'
import { useNavigate } from 'react-router-dom';

function UserProfile() {

  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const expiresAt = user?.profile.exp;
  const expiryDate = new Date(expiresAt*1000);
  const currentDate = new Date();

  const timeRemaining = expiryDate - currentDate;

  const minutesRemaining = Math.floor(timeRemaining/ (1000*60))

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remover o usuário do localStorage
    navigate('/'); // Redirecionar para a página de login ou outra rota de sua escolha
  };

    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionPageUserProfile'>

            <img src={user?.profile.picture} alt="Foto do perfil do usuário logado" className='userPageProfilePicture'/>
            <h5>{user?.profile.name}</h5>
            <p>Time: Front-end</p>
            <p>Tempo de sessão restante: {`${minutesRemaining}`} minutos</p>

            <div className='divExitPageUserProfile' onClick={handleLogout}>
                    <p><b>Sair</b> da conta</p>
                    <img src='/icons/move-to-svgrepo-com.svg' alt='' style={{height:'2vh'}}/>
            </div>

            <a href='/' className='exitPageUserProfile'>
                
            </a>
            
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default UserProfile;