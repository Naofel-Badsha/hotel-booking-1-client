const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
        <i className="fa-solid fa-house text-8xl text-[#008080]"></i>
          <p className="font-bold ">
            & Star Hotel Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">Services</header>
          <a className="link link-hover">Food & Drinks</a>
          <a className="link link-hover">Event and Meeting Services</a>
          <a className="link link-hover">Safety and Security</a>
          <a className="link link-hover">Shoping Fachelity</a>
          <a className="link link-hover">Tour Gider</a>
          <a className="link link-hover">Sports Facilities</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">Info</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Room</a>
          <a className="link link-hover">Booking</a>
        </nav>
        <nav>
          <header className="footer-title text-2xl text-[#008080]">Flow Us</header>
          <i className="fa-brands fa-facebook text-3xl text-[#008080] cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-3xl text-[#008080] cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-3xl text-[#008080] cursor-pointer"></i>
          <i className="fa-brands fa-linkedin text-3xl text-[#008080] cursor-pointer"></i>
          <i className="fa-brands fa-whatsapp text-3xl text-[#008080] cursor-pointer"></i>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
