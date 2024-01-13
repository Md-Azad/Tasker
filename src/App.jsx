import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSecton from "./components/HeroSection";
import TaskBoard from "./task/TaskBoard";



function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <HeroSecton />
        <TaskBoard />
      </div>
      <Footer />
      
    </>
  );
}

export default App;
