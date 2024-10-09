import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SliderProjects from '../../components/SliderProjects/SliderProjects';
import './ProjectsList.css'

function ProjectsList() {
    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionProjectsList'>
          <h4 className='h4ProjectsList'>Projetos em execução</h4>
          <SliderProjects></SliderProjects>
          {/* <projectView> 
            link to="enderecoSEMbarra"
            para navegacao recursiva
          */}
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default ProjectsList;