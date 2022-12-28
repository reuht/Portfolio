import SecctionsHero from "../../Components/SecctionsHero";

const MainContainer = () => {
  return (
    <main>
      <SecctionsHero>
        <h1>Hola, soy</h1>
        <h2>Joseph Villalba</h2>
        <h2 className="title">Full stack developer.</h2>

        <div className="description">
          <span>
            Soy un licenciado en matemáticas con amor por la programación,
            durante mi formación vi programación con Python y alguna otras veces
            con Matlab, esto me lleno de mucho interés por el mundo de la
            tecnología; actualmente me estoy formando con full stack developer.
            Mientras estudio análisis y desarrollo de software.
          </span>
        </div>
        <button>Resumen</button>
      </SecctionsHero>
    </main>
  );
};

export default MainContainer;
