import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
// function App() {
//   return (
//     <div className="App">
//       <h1 className='App_h1'>hello world</h1>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className='App'>
      <Home />
      <About />
      <Service />
    </div>
  )
}

export default App;
