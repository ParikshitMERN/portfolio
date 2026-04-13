import bg from "../assets/bg.png";

function Home() {
  return (
    <section className="firstsection">
      <div className="leftsection">
        Hi, I am
        <span style={{ color: "blueviolet" }}> Parikshit Maharjan,</span>
        <div style={{ marginLeft: "5%" }}>- Full Stack Developer.</div>
      </div>
      <div className="rightsection">
        <img src={bg} alt="Background" />
      </div>
    </section>
  );
}

export default Home;
