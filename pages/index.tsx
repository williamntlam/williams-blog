export default function Home() {
  return (
    <div className="flex">
      <aside
        className="w-1/4 h-screen bg-cover p-4"
        style={{ backgroundImage: `url('/toronto.jpg')` }}
      >
        {/* Profile Picture Section */}
        <section></section>
      </aside>
      <main className="w-3/4 p-4 bg-white">Hello World</main>
    </div>
  );
}
