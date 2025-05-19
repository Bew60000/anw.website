import Footer from "./components/layout/Footer";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/layout/Content";
import BackgroundEffect from "./components/effect/Background-effect";


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
