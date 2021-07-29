import styles from './Index.module.css';
import { useState,useEffect} from 'react';


type TaskItemProps = {
  createdAt:string;
  taskDate:string;
  taskDescription:string;
  taskStatus:string;
}

type FilteredItemsProps = {
  filteredTasks:{
    createdAt:string;
    taskDate:string;
    taskDescription:string;
    taskStatus:string;
  }[]
}

export function TaskItem({filteredTasks}:FilteredItemsProps){

    const [userTasks,setUserTasks] = useState<TaskItemProps[]>()

    useEffect(()=>{

      const data = JSON.parse(localStorage.getItem('UserTask'))

      if(data){

        const userTask = data[0]?.tasks.map((task:TaskItemProps)=> {
          return { 
            createdAt:task.createdAt,
            taskDate:task.taskDate,
            taskDescription:task.taskDescription,
            taskStatus:task.taskStatus
          }
          
        })
        setUserTasks(userTask)
      }

    },[])

    return(

    <>
      {
        filteredTasks.length>0

        ? filteredTasks.map((task:TaskItemProps) => (
  
          <div className={styles.task} key={task.taskDescription}>
            <div className={styles.task__date} >
              <span className={styles.task__day}>{task.taskDate.substring(0,2)}</span>
              <span className={styles.task__month}>{task.taskDate.substring(5)}</span>
            </div>
            
            <p className={styles.task__description}>{task.taskDescription}</p>

            <select name="status" id="status" defaultValue={task.taskStatus} className={styles.task__status}>
              <option value="done">Concluído</option>
              <option value="pending">Pendente</option>
              <option value="cancelled">Cancelado</option>
            </select>
          </div>
        ))
        :
        userTasks?.map((task:TaskItemProps) => (
  
          <div className={styles.task} key={task.taskDescription}>
            <div className={styles.task__date} >
              <span className={styles.task__day}>{task.taskDate.substring(0,2)}</span>
              <span className={styles.task__month}>{task.taskDate.substring(5)}</span>
            </div>
            
            <p className={styles.task__description}>{task.taskDescription}</p>

            <select name="status" id="status" defaultValue={task.taskStatus} className={styles.task__status}>
              <option value="done">Concluído</option>
              <option value="pending">Pendente</option>
              <option value="cancelled">Cancelado</option>
            </select>
          </div>
        ))
      }
    </>
  )
}