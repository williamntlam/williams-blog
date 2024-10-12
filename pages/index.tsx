import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <aside
        className="relative w-1/4 h-screen bg-cover bg-center flex flex-col items-center justify-start pt-8 p-4"
        style={{ backgroundImage: `url('/toronto-flatiron-building.jpg')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Profile Picture Section */}
        <section className="relative z-10 mb-4">
          <Image
            src="/personal-picture.jpg"
            alt="A personal picture of William Lam"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </section>

        {/* About Me Description */}
        <section className="relative z-10 mb-4 text-center">
          <h2 className="text-3xl font-bold text-white">William Lam</h2>
          <p className="text-sm text-white"></p>
        </section>

        {/* Social Media Links */}
        <nav className="relative z-10">
          <section className="flex justify-center space-x-4">
            <a
              href="https://github.com/williamntlam"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline hover:text-blue-300 transition-colors text-white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/william-lam-b3a8a2213/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline hover:text-blue-300 transition-colors text-white"
            >
              Linkedin
            </a>
            <a
              href="https://devpost.com/williamntlam?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline hover:text-blue-300 transition-colors text-white"
            >
              Devpost
            </a>
          </section>
        </nav>
      </aside>

      <main className="w-3/4 p-4 bg-white">Hello World</main>
    </div>
  );
}
