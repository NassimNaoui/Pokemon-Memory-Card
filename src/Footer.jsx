function Footer() {
  return (
    <div className="hidden md:flex flex-row justify-center items-center w-full bg-gray-100/25 text-[#121212] text-lg text-center gap-3">
      <div>
        Made by <span className="font-bold">thenasscode</span>
      </div>
      <div className="flex flex-row gap-1">
        <a href="https://github.com/NassimNaoui">
          <img
            className="w-6 h-6 cursor-pointer"
            src="assets/icons8-github-24.png"
            alt="github-logo"
          />
        </a>
        <a href="https://www.instagram.com/thenasscode">
          <img
            className="w-6 h-6 cursor-pointer"
            src="assets/icons8-instagram-logo-30.png"
            alt="github-logo"
          />
        </a>
        <a href="https://www.twitch.tv/thenasscode">
          <img
            className="w-6 h-6 cursor-pointer"
            src="assets/icons8-twitch-50.png"
            alt="github-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
