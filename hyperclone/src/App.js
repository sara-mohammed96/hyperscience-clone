import logo from './logo.svg';
import './App.css';
import HeroCenter from './components/heroCenter/HeroCenter';
import Banner from './components/banner/Banner';
import InsightsCards from './components/InsightsCards'
import Logos from './components/Logos';
function App() {
  return (
    <div className="App">
     <HeroCenter />
     <Banner />
     <InsightsCards />
     <Logos />
    </div>
  );
}

export default App;
