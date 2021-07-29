import styles from './Index.module.css'


type FilterProps = {
    filter:(filter:string)=>void
}


export function FilterTasks({filter}:FilterProps){



    return(

        <div className={styles.container}>
            <div className={styles.containerFilter}>

                <label htmlFor="filter" 
                className={styles.containerFilter__filter}
                >Filtre por:</label>

                <select 
                onChange={(e=>filter(e.target.value))} 
                className={styles.containerFilter__selectFilter}>

                    <option value="">-</option>
                    <option value="done">Concluído</option>
                    <option value="pending">Pendente</option>
                    <option value="cancelled">Cancelado</option>

                </select>

            </div>

            <button type="submit" className={styles.containerFilter__button}>Filtrar</button>

        </div>

    )
}