import './App.css';
import './style.css'
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './components/data';
function App() {
  const places = data.map(item=>{
    return (
      <Card 
          key = {item.id}
          {...item}
      />
    )
  })
  return (
    <div>
      <NavBar/>
      <section className='places-list'>
        {places}
      </section>
    </div>
  );
}

export default App;
