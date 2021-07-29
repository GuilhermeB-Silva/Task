import Modal from 'react-modal';  
import styles from './Index.module.css';
import {FormEvent} from 'react'


type ModalProps ={
    methods :{
        modalIsOpen:boolean;
        closeModal:() =>void;
        onChangeUserName:(name:string)=> void,
        name:string
    }
}

Modal.setAppElement('#__next');

export function InsertNameModal({methods}:ModalProps){

    const { modalIsOpen,closeModal,onChangeUserName,name} = methods

    function preventDefaultBtn(e:FormEvent){
        e.preventDefault()
        closeModal()
    }

    function checkNameCloseOverlay(){
        return true
    }

    return(
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={name ? closeModal : checkNameCloseOverlay}
        contentLabel="Example Modal"
        className={styles.showModal}
        overlayClassName={styles.Overlay}
       
         >
             <div>
                <h2 className={styles.title}>Insira seu nome</h2>

                <form className={styles.form}>

                    <input type="text" name="" 
                    id="" autoFocus
                    className={styles.form__input}
                    onChange={(e)=>onChangeUserName(e.target.value)}
                    />

                    <button type="submit" 
                    onClick={preventDefaultBtn}
                    className={styles.form__button}
                    >Confirmar
                    </button>

                </form>

             </div>
      </Modal>
    )
}