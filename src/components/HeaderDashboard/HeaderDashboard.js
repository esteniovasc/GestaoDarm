import './HeaderDashboard.css'

function HeaderDashboard() {

  const user = JSON.parse(localStorage.getItem('user'));

    return (
      <header className="headerDashboard">
        <a href="/userprofile"><img src={user?.profile.picture} alt="Foto do perfil do usuário logado" className='userProfilePicture'/></a>
        <a href='/'><img src="/icons/logoDarmLabs.jpg" alt="Logo Darm Labs" style={{height:'5vh'}} /></a>
        <img src="/icons/menu-svgrepo-com.png" alt="Menu Lateral" style={{height:'5vh'}}/>
      </header>
    );
  }
  
  export default HeaderDashboard;