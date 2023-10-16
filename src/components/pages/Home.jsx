import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span></span></h1>
            <p>Comece a gerenciar os seus projectos agora mesmo</p>
            <Link to="/newProject" text="Criar Projecto" >
            
            text
        </Link>
            <img src={savings} alt='Costs' />
        </section>
    )
    
    
}

export default Home