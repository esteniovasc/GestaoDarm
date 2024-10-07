import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import HeaderHomePage from '../../components/HeaderHomePage/HeaderHomePage';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function HomePresentation() {
    return (
      <div>
        <HeaderHomePage/>
        <HeaderDashboard/>
        <NavigationBar/>
        {/* <WhatIsSection/>
        <WeServicesSection/>
        <CasesSection/>
        <EnterprisesSection/>
        <OurTeamSection/>
        <AboutUsSection/>
        <CallToActionSection/>
        <FooterHomePage/> */}
      </div>
    );
  }
  
  export default HomePresentation;