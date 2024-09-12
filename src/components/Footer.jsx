function Footer() {  
  const currentYear = new Date().getFullYear();

    return (
      <footer className="h-20 bg-gray-800 text-white flex items-center justify-center ">
        <p className="text-xl font-semibold">&copy; {currentYear} BC Padel</p>
      </footer>
    );
  }
  
  export default Footer;