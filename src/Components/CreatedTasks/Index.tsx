import { FormEvent } from 'react';
import styles from './Index.module.css';
import { TaskItem} from './TaskItems/Index';
import {FilterTasks} from './Filter/Index';
import { useEffect,useState } from 'react';


type TaskItemProps = {
    createdAt:string;
    taskDate:string;
    taskDescription:string;
    taskStatus:string;
}

export function CreatedTasks(){

    const [filter,setFilter] = useState<string>('null')
    const [filteredTasks,setFilteredTasks] = useState<TaskItemProps[]>([])


    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem('UserTask'))

        if(data){
            const userTask = data[0].tasks.filter((task:TaskItemProps)=> {
    
                if(task.taskStatus == filter){
                    return { 
                      createdAt:task.createdAt,
                      taskDate:task.taskDate,
                      taskDescription:task.taskDescription,
                      taskStatus:task.taskStatus
                    }
                }
            })

            setFilteredTasks(userTask)
        }
  
    },[filter])

    function onSubmit(e:FormEvent){
        e.preventDefault()
    }

    function FilterTasksByStatus(filter:string){
        setFilter(filter)
    }   


    return(

        <form className={styles.containerTasks} onSubmit={onSubmit}>

            <h1 className={styles.containerTasks__tasks}>Suas tarefas</h1>

            <FilterTasks filter={FilterTasksByStatus}/>

            <TaskItem filteredTasks={filteredTasks}/>
    
        </form>

    )
}