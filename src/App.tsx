import Footer from "./layout/Footer";
import Navbar from "./components/navbar/Navbar";
import Content from "./layout/Content";
import BackgroundEffect from "./components/Effect/Background-effect";

function App() {
  return (
    <BackgroundEffect>
      <div className="relative min-h-screen">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </BackgroundEffect>
  );
}

export default App;
