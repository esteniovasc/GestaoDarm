import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Tasks() {
    return (
      <div>
        <HeaderDashboard/>
        <section>
          <h5>Aqui terá as tasks individuais</h5>
        </section>
        <NavigationBar/>
      </div>
    );
  }
  
  export default Tasks;