import styles from './Index.module.css'
import { FcCalendar } from "react-icons/fc";
import { useState,FormEvent,useEffect} from 'react';

  type NewTaskProps = {
    values:{
      doneCreatingTasks:()=>void;
      name:string
    }
  }

  type TaskItemProps = {
    createdAt:string;
    taskDate:string;
    taskDescription:string;
    taskStatus:string;
  }

  export function NewTask({values}:NewTaskProps){

    const { doneCreatingTasks,name}  = values

    const [date,setDate] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [status,setStatus] = useState<string>('')
    const [storageTasks,setStorageTasks] = useState<TaskItemProps[]>([])

    useEffect(()=>{

      const data = JSON.parse(localStorage.getItem('UserTask'))
      
      if(!data){

        localStorage.setItem('UserTask','')

      } else {

        const userTask = data[0].tasks.map((task:TaskItemProps)=> {
          return { 
            createdAt:task.createdAt,
            taskDate:task.taskDate,
            taskDescription:task.taskDescription,
            taskStatus:task.taskStatus
          }
          
        })
        setStorageTasks(userTask)
      } 

    },[])


    function onSubmitForm(e:FormEvent){
      e.preventDefault()

      const data = [{
        user:name,
        tasks:[...storageTasks,
          { 
            createdAt:new Date(),
            taskDate:new Intl.DateTimeFormat('pt-BR',{month:'long',day:'numeric'}).format(new Date(date)),
            taskDescription:description,
            taskStatus:status
          }]
      }]

      localStorage.setItem('UserTask', JSON.stringify(data))

      doneCreatingTasks()

    }

    let formatedDate = ''

    if(date){
      formatedDate = new Intl.DateTimeFormat('pt-BR',{timeZone:'UTC'}).format(new Date(date))
    }

    return(

      <div className={styles.containerTask}>
        
        <h1 className={styles.containerTask__title}>Criar nova Tarefa</h1>

        <form className={styles.createTask} onSubmit={onSubmitForm}>

          <div className={styles.createTask__date}>

              <div className={styles.createTask__newDate}>
                <FcCalendar className={styles.createTask__iconDate}/>
                <span className={styles.createTask__taskDay}>Dia da tarefa</span>
                <input type="date" value={date} className={styles.createTask__addDate} onChange={e=>setDate(e.target.value)}/>
              </div>

              <span className={styles.createTask__showDate}>{formatedDate}</span>

          </div>

          <div className={styles.createTask__addDetail}>
            <input type="text" id="description"
            placeholder='Adicione uma nova descrição para a atividade'
            onChange={e=>setDescription(e.target.value)} 
            className={styles.createTask__newDescription}/>
          </div>

          <div className={styles.createTask__status}>

            <label htmlFor="status">Selecione o status</label>

            <select id="status" onChange={e=>setStatus(e.target.value)} 
            defaultValue={status}
            className={styles.createTask__selectStatus} >
              <option value="">-</option>
              <option value="done">Concluído</option>
              <option value="pending">Pendente</option>
              <option value="cancelled">Cancelado</option>
            </select>

          </div>
          
          <button type="submit" className={styles.containerTasks__addTask}>Salvar tarefa</button>

        </form>
        
      </div>

    )
}
