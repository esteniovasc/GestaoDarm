import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function DashboardHome() {
    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>Bem-vindo $nomeUsuario</h5>
          <h4>Projetos em andamento:</h4>
          <p>carrossel</p>
          <h4>Horário de hoje ($dia_data)</h4>
          <p>planilha - powerbi?</p>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default DashboardHome;