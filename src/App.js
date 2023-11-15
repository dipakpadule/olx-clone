import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Adds from "./components/main/Adds";
import Navbar from "./components/navbar/Navbar";
import SponseredAdds from "./components/sponsoredAdds/SponsoredAdds";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <SponseredAdds />
      <div className="App">
        <Adds />
      </div>
      <Footer />
    </div>
  );
}

export default App;
