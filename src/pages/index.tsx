import styles from '../styles/Home.module.css';
import { useState} from 'react'
import {Header} from '../Components/Header/Index';
import { InsertNameModal } from '../Components/Modal/Index';
import { Tasks} from '../Components/Tasks/Index'


export default function Home() {

  const [name,setName] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [ isCreatingnewTask,setIsCreatingnewTask] = useState(false)


  function onChangeUserName(name:string){
    setName(name)
  }

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  function closeModal() {
    setModalIsOpen(false);
  }

  function createNewTask(){
    setIsCreatingnewTask(true)
  }

  function doneCreatingTasks(){
    setIsCreatingnewTask(false)

  }

  return (

    <div className={styles.container}>
      
      <Header name={name}/>

      <Tasks values={{isCreatingnewTask,doneCreatingTasks,name}}/>

      {!isCreatingnewTask && 
        <button onClick={createNewTask} className={styles.containerTasks__addTask}>Adicionar nova tarefa</button>
      }

      <InsertNameModal methods={{modalIsOpen,closeModal,onChangeUserName,name}}/>

    </div>
  ) 
}
