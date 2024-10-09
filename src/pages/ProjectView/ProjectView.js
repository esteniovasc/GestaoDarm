import { useParams } from 'react-router-dom';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import projectsData from '../../data/projectsData.json'

function ProjectView() {

  const {id} = useParams();
  const dataProject = projectsData.find((dataProject) => dataProject.id === id);

  console.log("ID do projeto: ", id);

    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>Aqui é uma visualização invidual do projeto</h5>
          <img src={dataProject.image} alt='teste'/>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default ProjectView;