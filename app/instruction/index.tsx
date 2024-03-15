import styles from "../page.module.css";

export const Instruction = () => {
    return (
        <div className={styles.description}>
            <p>
                Get started by entering&nbsp;
                <code className={styles.bold}>Name</code>
            </p>
        </div>
    )
}
export default Instruction;