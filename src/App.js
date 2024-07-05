import './App.css';
import Card from "./components/Card";
import Story from "./components/Story";
import Contact from "./components/Contact";

function App() {

  const items = [
    {
      name: "",
      description: "",
      price: "",
      status: "available"
    },
    {
      name: "",
      description: "",
      price: "",
      status: "available"
    },
    {
      name: "",
      description: "",
      price: "",
      status: "available"
    },
    {
      name: "",
      description: "",
      price: "",
      status: "available"
    },
    {
      name: "",
      description: "",
      price: "",
      status: "available"
    },
  ];

  const products = items.map((item, index) => {
    return (
      <li key={index}><Card item={item}></Card></li>
    );
  })

  return (
    <div className="App">
      <div className='app-container'>
        <ul className='products'>{products}</ul>
        <nav>social media accounts</nav>
      </div>
    </div>
  );
};

export default App;