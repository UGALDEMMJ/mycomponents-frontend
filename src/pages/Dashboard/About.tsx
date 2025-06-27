const About = () => {
  return (
     <div className="max-w-4xl mx-auto p-6 text-white font-space-mono">
      <h1 className="text-4xl font-bold mb-4">About MyComponents</h1>
      <p className="mb-4 text-lg leading-relaxed">
        <strong>MyComponents</strong> is a personal library created by Marcos Ugalde Morales to organize and revisit custom UI components developed throughout my journey as a developer. This project serves as a central hub to store, experiment with, and draw inspiration from the elements I’ve built for various applications—including this one.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Built with <span className="font-semibold">Deno, React, TailwindCSS, PostgreSQL, GSAP</span>, and <span className="font-semibold">motion/react</span>, this app is not only a component showcase but also a playground for sharpening my <span className="font-semibold">TypeScript</span> and full-stack development skills.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Whether for quick reference, inspiration, or personal growth, MyComponents is designed to make UI development more efficient and enjoyable.
      </p>

      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/UGALDEMMJ/mycomponents-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          GitHub Repository
        </a>
        <a
          href="https://www.linkedin.com/in/mugaldem/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  )
}

export default About