import styles from './InputBox.module.css'
export const InputBox =()=>{
    return (
        <div className={styles.Input}>
            <div className={styles.InputTitle} >InputTitle</div>
            <input type='text' className={styles.InputBox} />
        </div>
    )
}