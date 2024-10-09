import DateToday from '../../components/DateToday/DateToday';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderProjects from '../../components/SliderProjects/SliderProjects';
import './DashboardHome.css'

function DashboardHome() {
    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionDashboardHome'>
          <h5>Bem-vindo, $nomeUsuario!</h5>
          <h4>Projetos em andamento:</h4>
          <SliderProjects/>
          <DateToday/>
          <p>planilha - powerbi?</p>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default DashboardHome;