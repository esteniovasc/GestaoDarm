import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Teams.css'

function Teams() {
    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionTeams'>
          <h5>Aqui você verá as equipes</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default Teams;