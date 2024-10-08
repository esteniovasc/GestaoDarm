import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function ProjectList() {
    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>Lista de tarefas individuais</h5>
          {/* <projectView> 
            link to="enderecoSEMbarra"
            para navegacao recursiva
          */}
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default ProjectList;