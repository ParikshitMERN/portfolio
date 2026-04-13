import bg from "../assets/bg.png";

function Home() {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center mt-20 md:mt-28 px-4 md:px-0 min-h-[80vh]">
      <div className="w-full md:w-2/5 text-center md:text-left text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-8 md:mb-0">
        Hi, I am
        <span className="text-violet-500"> Parikshit Maharjan,</span>
        <div className="ml-0 md:ml-4 mt-2">- Full Stack Developer.</div>
      </div>
      <div className="w-4/5 sm:w-3/5 md:w-2/5">
        <img src={bg} alt="Background" className="w-full" />
      </div>
    </section>
  );
}

export default Home;
