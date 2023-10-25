import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react"
import Message from "../layout/Message"

import styles from './Projects.module.css'
import Container from "../layout/Container"
function Projects() {

    const[projects, setProject] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    useEffect(()=>{
        fetch('http://localhost:3000/projects',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProject(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projectos</h1>
                <LinkButton to="/newProject" text="Criar Projecto" /> 
                               
            </div>
            {message && <Message type="sucess" msg="Alguma mensagem"/>}
            <Container customClass="start">
                {projects.length > 0 &&
                projects.map((project)=> <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    />
                )}
            </Container>
        </div>
    )
}
export default Projects