import LinkButton from "../layout/LinkButton"

import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

import Message from "../layout/Message"

import styles from './Projects.module.css'
import Container from "../layout/Container"
function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return(
        <div className={styles.project_container}>
            <p>olaaaa</p>
            <div className={styles.title_container}>
                <h1>Meus Projectos</h1>
                <LinkButton to="/newProject" text="Criar Projecto" /> 
                               
            </div>
            {message && <Message type="sucess" msg="Alguma mensagem"/>}
            <Container customClass="start">
                <p>Projectooooooo</p>
            </Container>
        </div>
    )
}
export default Projects