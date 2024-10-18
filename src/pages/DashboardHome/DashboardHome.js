import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderProjects from '../../components/SliderProjects/SliderProjects';
import './DashboardHome.css'

function DashboardHome() {

  const user = JSON.parse(localStorage.getItem('user'));
  const date = new Date().toLocaleDateString("pt-BR", {weekday:"long", day:"2-digit", month:"long"});

    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionDashboardHome'>
          <h5>Bem-vindo, {user?.profile.name}</h5>
          <h4>Projetos em andamento:</h4>
          <SliderProjects/>
          <h4>Horário de hoje <b className="dateStyle">({`${date}`})</b></h4>
          <p>Cadeiras disponíveis:</p>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default DashboardHome;