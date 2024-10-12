import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <aside
        className="w-1/4 h-screen bg-cover bg-center p-4"
        style={{ backgroundImage: `url('/toronto.jpg')` }}
      >
        {/* Profile Picture Section */}
        <section className="mb-4">
          <Image
            src="/personal-picture.jpg"
            alt="A personal picture of William Lam"
            width={128}
            height={128}
            className="rounded-full mx-auto"
          />
        </section>

        {/* About Me Description */}
        <section className="mb-4 text-center">
          <h2 className="text-xl font-semibold">William Lam</h2>
          <p className="text-sm"> Description </p>
        </section>

        {/* Social Media Links */}
        <nav>
          <section className="flex justify-center space-x-4"></section>
        </nav>
      </aside>
      <main className="w-3/4 p-4 bg-white">Hello World</main>
    </div>
  );
}
