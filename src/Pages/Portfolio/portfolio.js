import projectsDb from './projectsdb.json';
import Project from '../../Components/Project/Project';
import PageHeader from '../../Components/PageHeader/PageHeader';


export default function Portfolio() {
    const ProjectList = () =>
        projectsDb.map((project, i) => (
            <Project
                key={i}
                id={project.id}
                title={project.title}
                technologies={project.technologies}
                image={project.image}
                color={project.bgcolor}
                github={project.github}
                deployed={project.deployed}
                description={project.description}
            />
        ));


    return (
        <section className="portfolio">
            <PageHeader title="Portfolio" description="Estes são os meus principais projetos!" />
            <div className="row">
                <ProjectList />
            </div>
        </section>
    )
}