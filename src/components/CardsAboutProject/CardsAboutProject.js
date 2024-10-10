import './CardsAboutProject.css'

function CardsAboutProject(props){

    return (

        <section className="sectionProjectCardsLinks">

            <a href={props.hrefTeams} target="_blank" rel="noreferrer" className="projectCardLink">
                <div>
                    <img src="/icons/softwares/icons8-teams-100.png" alt="" />
                    <p>Acessar reunião</p>
                </div>
            </a>

            <a href={props.hrefGitLab} target="_blank" rel="noreferrer" className="projectCardLink">
                <div>
                    <img src="/icons/softwares/icons8-gitlab-100.png" alt="" />
                    <p>Acompanhar CI/CD</p>
                </div>
            </a>

            <a href={props.hrefJira} target="_blank" rel="noreferrer" className="projectCardLink">
                <div>
                    <img src="/icons/softwares/icons8-jira-100.png" alt="" />
                    <p>Ver tarefas</p>
                </div>
            </a>

            <a href={props.hrefFigma} target="_blank" rel="noreferrer" className="projectCardLink">
                <div>
                    <img src="/icons/softwares/icons8-figma-100.png" alt="" />
                    <p>Ver protótipo</p>
                </div>
            </a>
            
        </section>

    )
}

export default CardsAboutProject;