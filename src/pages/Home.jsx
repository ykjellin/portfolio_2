import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Crabstore',
    description:
      'This is Crabstore, an Ecom website made for my Javascript framework assignment.',
    imageUrl: '/Crabstore.png',
    repoUrl: 'https://github.com/ykjellin/js-frameworks-ca',
    liveUrl: 'https://crabstore.netlify.app/',
  },
  {
    title: 'Holidaze',
    description:
      'This is Holidaze, a Venue hosting/booking website I made for my Project Exam 2.',
    imageUrl: '/Holidaze.png',
    repoUrl: 'https://github.com/ykjellin/holidaze_exam',
    liveUrl: 'https://frolicking-gumdrop-43f924.netlify.app/',
  },
  {
    title: 'Elegant Auctions',
    description:
      'This is Elegant Auctions, an auction website that I made for my Semester Project 2.',
    imageUrl: '/Elegant.png',
    repoUrl: 'https://github.com/ykjellin/Semester-Project-2',
    liveUrl: 'https://elegant-auctions.netlify.app/home/',
  },
];

const Home = () => {
  return (
    <div className="relative bg-dark text-textLight h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-dots font-sans">
      {/* Invisible Skip Links for Accessibility */}
      <div className="sr-only focus:not-sr-only absolute top-4 left-4 z-30">
        <a href="#about" className="block bg-primary text-dark p-2 rounded">
          Skip to About
        </a>
        <a
          href="#portfolio"
          className="block bg-primary text-dark p-2 rounded mt-2"
        >
          Skip to Portfolio
        </a>
        <a
          href="#contact"
          className="block bg-primary text-dark p-2 rounded mt-2"
        >
          Skip to Contact
        </a>
      </div>

      {/* Intro Section */}
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center text-center p-8 relative snap-start z-20"
      >
        <h1 className="text-4xl font-bold text-primary">Hello, I'm Øyvind</h1>
        <p className="max-w-2xl mt-4">
          I'm a Front end developer and visual effects artist passionate about
          creating visually appealing and user-friendly applications. Welcome to
          my portfolio, where you can explore my latest projects and get in
          touch!
        </p>
        <p className="max-w-2xl mt-4">
          I have a bachelor of 3D animation and visual effects from Media design
          school in New Zealand and have recently completed an online course for
          Front end development and i am looking forward to testing out new
          horizons and getting stuck in.
        </p>

        {/* Background Shapes (Behind Content) */}
        <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[600px] bg-primary opacity-10 transform rotate-12 animate-moveShape1 z-10"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[500px] bg-primary opacity-15 transform rotate-[-20deg] animate-moveShape2 z-10"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <span className="text-primary text-3xl">↓</span>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="min-h-screen flex flex-col items-center p-8 relative snap-start z-20"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Background Shapes */}
        <div className="absolute top-[-100px] left-[10%] w-[220px] h-[550px] bg-primary opacity-10 transform rotate-8 animate-moveShape3 z-10"></div>
        <div className="absolute bottom-[-80px] right-[5%] w-[280px] h-[500px] bg-primary opacity-15 transform rotate-[-15deg] animate-moveShape1 z-10"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <span className="text-primary text-3xl">↓</span>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center p-8 relative snap-start z-20"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-center mb-6">
          You can reach me by email at: kjellinfrontend@gmail.com
        </p>
        <a
          href="mailto:kjellinfrontend@gmail.com"
          className="border-2 border-primary text-primary px-6 py-2 hover:bg-primary hover:text-dark transition z-20"
        >
          Email Me
        </a>

        {/* Background Shapes */}
        <div className="absolute top-[-80px] left-[-40px] w-[250px] h-[600px] bg-primary opacity-10 transform rotate-6 animate-moveShape2 z-10"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[550px] bg-primary opacity-15 transform rotate-[-10deg] animate-moveShape3 z-10"></div>
      </section>
    </div>
  );
};

export default Home;
