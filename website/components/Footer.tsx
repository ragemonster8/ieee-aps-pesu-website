export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-sm font-medium text-white">IEEE AP-S PESU</p>
          <p className="text-sm text-gray-400">
            A technical student chapter focused on antennas, propagation, and research-led learning.
          </p>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} IEEE AP-S PES University
        </p>
      </div>
    </footer>
  );
}
