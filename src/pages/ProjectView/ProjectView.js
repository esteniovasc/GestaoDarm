import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function ProjectView() {
    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>Aqui é uma visualização invidual do projeto</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default ProjectView;