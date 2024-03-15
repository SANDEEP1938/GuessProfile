import { IForm } from "../interface";
import styles from "../page.module.css";

export const Form = ({ handleSubmit, updateName, name }: IForm) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.card}>
                <code>
                    Name:
                    <input type="text" value={name} onChange={(e) => updateName(e.target.value)} />
                </code>
            </h2>
            <button className={styles.card} type="submit">
                <span>
                    <h2>
                        Submit
                    </h2>
                    <p>Guess Age, Gender, and Country</p>
                </span>
            </button>
        </form>
    )
}
export default Form;