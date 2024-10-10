import { useParams } from 'react-router-dom';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import projectsData from '../../data/projectsData.json'
import './ProjectView.css'
import CardsAboutProject from '../../components/CardsAboutProject/CardsAboutProject';

function ProjectView() {

  const {id} = useParams();
  const dataProject = projectsData.find((dataProject) => dataProject.id === id);

  console.log("ID do projeto: ", id);

    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionProjectView'>
          
          <h4 className='h4ProjectName '>{dataProject.name}</h4>
          <p><b className='objectiveStyle'>Objetivo: </b>{dataProject.description}</p>
          <img className='imageProject' src={dataProject.image} alt='teste'/>

          <CardsAboutProject 
          hrefTeams={dataProject.linkTeams}
          hrefGitLab={dataProject.linkGitLab}
          hrefJira={dataProject.linkJira}
          hrefFigma={dataProject.linkFigma} />

        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default ProjectView;