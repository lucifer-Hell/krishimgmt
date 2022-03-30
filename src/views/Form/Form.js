import { InputBox } from "../../components/InputBox/InputBox"
import { Button} from '../../components/Button/Button'
import styles from './Form.module.css'
import { TitleBar } from "../../components/TitleBar/TitleBar"
export const Form = ()=>{
    return (
        <form className={styles.Form}>
            <TitleBar />
            <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between"}}>
                <InputBox />
                <Button customStyle={{width:"20%"}} value="upload Image"></Button>
            </div>
            <InputBox />
            <Button customStyle={{backgroundColor:" #A6E2A1",width:"20%",margin:"1em auto"}} value="Save" />
        </form>
    )
}