/* eslint-disable no-unused-vars */
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rodrigo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit, consectetur quo ducimus facilis amet nulla maiores repudiandae, porro natus magni tempora pariatur sit omnis optio perspiciatis doloribus iste at."
          />
          <Post
            author="Gustavo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit, consectetur quo ducimus facilis amet nulla maiores repudiandae, porro natus magni tempora pariatur sit omnis optio perspiciatis doloribus iste at."
          />
          <Post
            author="Bruna"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit, consectetur quo ducimus facilis amet nulla maiores repudiandae, porro natus magni tempora pariatur sit omnis optio perspiciatis doloribus iste at."
          />
        </main>
      </div>
    </div> /*pode ser <> </> */
  )
}

