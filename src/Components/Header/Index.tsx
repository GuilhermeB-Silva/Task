import Head from 'next/head';
import styles from './Index.module.css';

type HeaderProps = {
    name:string
}

export function Header({name}:HeaderProps){


    return(
        <>
            <Head><title>Home</title></Head>

            <div className={styles.container}>

                <h1 className={styles.container__headerTitle}>TASKS</h1>

                <h2 className={styles.container__welcome}>
                    
                    {!!name && <span className={styles.welcome__userName}>{name}, </span>}
                    
                    seja bem-vindo ao TASKS
                </h2>

            </div>
        </>
    )
}   