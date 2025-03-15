const Footer = () => {
  return (
    <footer className="flex space-x-4 justify-center items-center text-xs py-2 px-2 font-gray-500 font-mono">
      <span>&copy; {new Date().getFullYear()} FlyMart</span>
      <span>
        Developed by{" "}
        <a href="https://github.com/asmitatemkar" target="_blank">
          <span className="underline">Asmita Temkar</span>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
