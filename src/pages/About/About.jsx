import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className={styles.mainArea}>
      <div className={styles.vanImage}> </div>
      <div className={styles.aboutInfo}>
        <div className={styles.info}>
          <h2>
            Porque se espremer em um sedan quando você pode relaxar em uma Van.{" "}
          </h2>
          <p>
            Se você está planejando uma viagem em grupo, transporte para eventos
            ou simplesmente precisa de espaço adicional para bagagem, temos a
            solução perfeita para você. 
          </p>
          <p>
            Confie em nós para o seu aluguel de van e descubra por que somos a
            escolha preferida de tantos clientes satisfeitos.
          </p>
        </div>
        <div className={styles.exploreCard}>
          <h3>
            Seu destino lhe aguarda. <br />
            Sua Van está pronta.
          </h3>
          <button>
            <Link to="/vans">Explore nossas Vans</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
