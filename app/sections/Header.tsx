const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 w-full pt-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none relative">
        <a href="#home" className="nav-item relative z-10">
          Home
        </a>
        <a href="#about" className="nav-item relative z-10">
          About
        </a>
        <a href="#services" className="nav-item relative z-10">
          Services
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900 relative z-10 shadow-lg"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
