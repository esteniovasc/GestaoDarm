import './HeaderHomePage.css'

function HeaderHomePage() {
    return (
      <header className="headerHomePage">
        <img src="/icons/menu-svgrepo-com.png" alt="Menu Lateral" style={{height:'5vh'}}/>
        <img src="/icons/logoDarm.png" alt="Logo Darm Labs" />
        <a href="/login"><img src="/icons/user-svgrepo-com.png" alt="" style={{height:'5vh'}}/></a>
      </header>
    );
  }
  
  export default HeaderHomePage;