import projectsDb from './projectsdb.json';
import Project from '../../Components/Project/Project';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { useState } from 'react';


export default function Portfolio() {

    /* const [busca, setBusca] = useState('')
    console.log(busca)

    const projetosFiltrados = projectsDb.filter((project) => project.startsWith(busca));  */

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
            {/* <div>
                <input
                    type='text'
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div> */}
            <div className="row">
                <ProjectList />
            </div>
        </section>
    )
}