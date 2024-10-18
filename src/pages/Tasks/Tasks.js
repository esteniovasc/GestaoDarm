import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Tasks.css'

function Tasks() {
    return (
      <div>
        <HeaderDashboard/>
        <section className='sectionTasks'>
          <h5>Aqui terá as tasks individuais</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default Tasks;