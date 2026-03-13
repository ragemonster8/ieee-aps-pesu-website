export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">IEEE AP-S PESU</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/team">Team</a>
        <a href="/blogs">Blogs</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}