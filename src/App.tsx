import Footer from "./components/layout/Footer";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/layout/Content";
import Background from "./components/effect/Background";

function App() {
  return (
    <Background>
      <div className="relative min-h-screen">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Background>
  );
}

export default App;
