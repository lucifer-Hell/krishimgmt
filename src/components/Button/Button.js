import styles from './Button.module.css'
export const Button=(props)=>{
    return (
        <button className={styles.Button} style={props.customStyle}> 
            { (props.value)?props.value:"button-demo"}
        </button>
    )
}