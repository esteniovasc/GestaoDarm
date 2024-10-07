import './HeaderDashboard.css'

function HeaderDashboard() {
    return (
      <header className="headerDashboard">
        <a href="../../pages/login/login"><img src="/icons/user-svgrepo-com.png" alt="" style={{height:'5vh'}}/></a>
        <img src="/icons/logoDarm.png" alt="Logo Darm Labs" />
        <img src="/icons/menu-svgrepo-com.png" alt="Menu Lateral" style={{height:'5vh'}}/>
      </header>
    );
  }
  
  export default HeaderDashboard;