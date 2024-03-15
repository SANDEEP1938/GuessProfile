import { IResult } from "../interface";
import styles from "../page.module.css";

export const Result = (
    { age, gender, country }: IResult) => {
    return (
        <div className={styles.result}>
            {age !== null && (
                <code>
                    Guessed Age: &nbsp;
                    <code className={styles.bold}>{age}</code>
                </code>
            )}
            {gender !== null && (
                <code>
                    Guessed Gender: &nbsp;
                    <code className={styles.bold}>{gender}</code>
                </code>
            )}
            {country !== null && (
                <code>
                    Guessed Country: &nbsp;
                    <code className={styles.bold}>{country}</code>
                </code>
            )}
        </div>
    )
}
export default Result;