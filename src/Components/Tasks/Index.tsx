import { CreatedTasks } from "../CreatedTasks/Index"
import { NewTask } from "../NewTask/Index"

type TasksProps = {
    values : {
        isCreatingnewTask:boolean;
        doneCreatingTasks:()=>void;
        name:string
    }
}

export function Tasks({values}:TasksProps){

    const {isCreatingnewTask,doneCreatingTasks,name} = values

    return(
        <>
            {   
            isCreatingnewTask
            // boolean para alterar componentes
            ? <NewTask values={{doneCreatingTasks,name}}/>
            : <CreatedTasks />
            }
        </>
    )
}