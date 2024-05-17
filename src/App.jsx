import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

//

//author : {avatar_url: "", name: "", role: ""}
//pubishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavoguanabara.png',
      name: 'Gustavo Guanabara',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Opa, boa noite!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. deem uma moral la! ' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-11 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/12782014?v=4',
      name: 'Hudson Medeiros',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'É um projeto que fiz com Lucas, no evento da Rocketseat. O nome do projeto é Rede Social' },
      { type: 'link', content: 'www.github.com/souzalusca' },
    ],
    publishedAt: new Date('2022-05-10 07:13:30'),
  }
]
export function App() {

  return (
    <div>
    <Header />
   
    <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
           return ( 
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            /> 
          )
         })}
        </main>

    </div>
    </div>
  )
}


