import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="Diego Fernandes"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nesciunt assumenda earum aliquam ratione, enim ab voluptatum modi. Culpa cumque eaque facere! Ex minima neque ratione natus veritatis velit laboriosam."
          />
          <Post 
            author="Marisa Vieira"
            content="Este é um novo post"
          />
        </main>
      </div>
      
    </div>    
  )
}

