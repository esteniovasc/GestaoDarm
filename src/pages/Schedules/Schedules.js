import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Schedules.css';

function Schedules() {
    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionSchedules'>
          <h5>Seção para os horários</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default Schedules;