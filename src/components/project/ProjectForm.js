import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './ProjectForm.module.css'
function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    //Renderiza a informação da Api só quando necessário
        useEffect(() => {
            //request de get
        fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
            //console.log(setCategories)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) =>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project,[e.target.name]: e.target.value})
    }
    function handleCategory(e) {
        setProject({...project, 
            category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            },
        })
        //console.log(project)
    }
    
    return (
            <form onSubmit={submit} className={styles.form}>
                <Input 
                type="text"
                text="Nome do Projecto"
                name="name"
                placeholder="Insira o nome do projecto"
                handleOnChange={handleChange}
                value={project.name ? project.name: ''}
                />
                <Input 
                type="number"
                text="Orçamento do Projecto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget: ''}
                />                
                <Select 
                name="category_id" 
                text="Selecione a catgoria" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id: ''} />
                <Submit text={btnText} />
            </form>
        )
}
export default ProjectForm