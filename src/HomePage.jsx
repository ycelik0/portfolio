import React from "react";

function HomePage() {
  return (
    <main>
      <section className="home__hero-section bg-primary text-white h-screen p-5">
        <h1 className="text-[2.75rem] pl-[15%]">Frontend Web Developer</h1>
        <p className="text-gray-500 py-5 pl-[15%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Sequi, nostrum.</p>
      </section>
      <section className="home__about-section bg-secondary text-white p-5">
        <h2>About</h2>
      </section>
    </main>
  )
}

export default HomePage;
