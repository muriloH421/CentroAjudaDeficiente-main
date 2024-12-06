import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.NewBoardBoard_div1}>
            <div className={styles.PageLoginBoard_header}>
                <h1 className={styles.PageLoginBoard_header2}> LOGIN</h1>
                <form className={styles.PageLoginBoard_form2}>
                    <label className={styles.PageLoginBoard_label3}>Email:</label>
                    <br />
                    <input type="text" className={styles.PageLoginBoard_input4} />
                    <br />
                    <label className={styles.PageLoginBoard_label4}>Senha:</label>
                    <br />
                    <input type="text" className={styles.PageLoginBoard_input5} />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Entrar"
                        className={styles.PageLoginBoard_input6}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login;
