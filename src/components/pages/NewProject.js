import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject() {

    //useHistory(permite redirecionar o usuário)
    const history = useHistory()

    function createPost(project) {
        // inicializar cost e srvices
        project.cost = 0
        project.services  = []

        fetch('http://localhost:3000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            //Enviar os dados para o servidor
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data)=> {
            console.log(data)
            // redirect
            history.push('/projects', {message: 'Projecto criado com sucesso' })
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className={styles.newproject_container}>
            <h1>Criar Projecto</h1>
            <p>Crie um projecto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projecto"/>
        </div>
    )    
    
}

export default NewProject