import logo from "../assets/icons8-store-48.png";

function Layout(props) {
  return (
    <div>
      <header className="sticky top-0 bg-white shadow w-full">
        <div className="container mx-auto flex items-center h-16">
          <img src={logo} className="h-8 w-8 mr-1" alt="logo" />
          <a className="text-gray-700 font-bold" href="/">
            React Store
          </a>
        </div>
      </header>
      <main className="py-8">
        <div className="container mx-auto">{props.children}</div>
      </main>
    </div>
  );
}

export default Layout;
