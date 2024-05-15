import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {

    return (
        
       <aside className={styles.sidebar}> 
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/124852772?s=400&u=ef20263a36d529b3c9e416415bd3ec81e288db03&v=4"/>
                <strong>Lucas de Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
       </aside>

    )
}