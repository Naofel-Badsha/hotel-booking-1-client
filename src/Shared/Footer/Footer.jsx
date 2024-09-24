const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <i className="fa-solid fa-house text-8xl text-[#008080]"></i>
          <p className="font-bold md:text-xl lg:text-xl text-white">
            7 Star Hotel Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">
            Services
          </header>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Food & Drinks</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Event and Meeting Services</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Safety and Security</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Shoping Fachelity</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Tour Gider</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Sports Facilities</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">Info</header>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Home</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Room</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Booking</a>
          <a className="link link-hover md:text-xl lg:text-xl text-white">Contact Us</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">
            Flow Us
          </header>
          <div className="flex gap-4">
            <i className="fa-brands fa-facebook text-3xl text-white cursor-pointer hover:-translate-y-2 duration-150"></i>
            <i className="fa-brands fa-twitter text-3xl text-white cursor-pointer hover:-translate-y-2 duration-150"></i>
            <i className="fa-brands fa-instagram text-3xl text-white cursor-pointer hover:-translate-y-2 duration-150"></i>
            <i className="fa-brands fa-whatsapp text-3xl text-white cursor-pointer hover:-translate-y-2 duration-150"></i>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
