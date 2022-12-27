import SecctionsHero from "../../Components/SecctionsHero";

const MainContainer = () => {
  return (
    <main>
      <SecctionsHero>
        <h1>Hola, soy</h1>
        <h2>Joseph Villalba</h2>
        <h2 className="title">Full stack developer.</h2>

        <p>
          Soy un licenciado en matemáticas con amor por la programación, durante
          mi formación vi programación con Python y alguna otras veces con
          Matlab, esto me lleno de mucho interés por el mundo de la tecnología;
          actualmente me estoy formando con full stack developer. Mientras
          estudio análisis y desarrollo de software.
        </p>
      </SecctionsHero>
    </main>
  );
};

export default MainContainer;
