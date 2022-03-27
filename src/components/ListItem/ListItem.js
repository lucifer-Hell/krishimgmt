import { DownloadIcon } from '../../icons/downloadIcon'
import styles from './ListItem.module.css'

export const ListItem=()=>{
    return (
        <li className={styles.main}>
           <div>
                Welcome 
           </div>
           <div>
                <DownloadIcon />  
           </div>
        </li>
    )
}