import styles from './Home.module.css'

const Home = () => {
    return (

        <>
            {/* <div className={styles.NewBoardBoard_div1}> */}
            {" "}
            <h1 className={styles.NewBoardBoard_header1}>Sobre nós 😁 </h1>
            <p className={styles.NewBoardBoard_p1}>
                A CAD é um empresa comprometida em fornecer soluçoes inovdoras e
                eficazes para melhorar a vida das pessoas com deficiencia. Nossa
                missao é promover a inclusão e a independência, garantindo que todos
                tenham acesso ás mesmas oportunidades
                <h1 className={styles.NewBoardBoard_header9}>Nossos serviços 👇</h1>


                {/* cards */}
                <div className={styles.container2}>
                    <div className={styles.Card1}>
                        <h2>Programas de capacitação</h2>
                        <p>
                            Realizaremos treinamentos e workshops para empresas e
                            comunidade promovendo a conscientização e a inclusão.
                        </p>
                    </div>

                    <div className={styles.Card2}>
                        <h2>Consultoria em Acessibilidade </h2>
                        <p>
                            Oferecemos orientação especialização para empresas e
                            instituição, ajudando-as a tornar seus espaços e serviços mais
                            acessíveis.
                        </p>
                    </div>

                    <div className={styles.Card3}>
                        <h2>
                            Tecnologia Assistiva
                        </h2>
                        <p >
                            Desenvolvemos e fornecemos soluções tecnológicas
                            personalizadas para atender ás necessidades especificas de
                            cada individuo.
                        </p>
                    </div>
                </div>
            </p>
            <div className={styles.Contato}>
                <h1>FAÇA A DIFERENÇA CONOSCO</h1>
                <p className={styles.NewBoardBoard_p7}>
                    Entre em contato para saber como podemos ajudar você ou sua
                    organização a promover a acessibilidade
                </p>
                <button className={styles.NewBoardBoard_button1}>Entre em Contato</button>
            </div>
            {/* </div> */}

        </>
    )
}

export default Home
