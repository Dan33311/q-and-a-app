import './App.css';
// import Categories from './components/Categories';
// import Padre from './components/Padre'
import CategoriesComponent from './components/CategoriesComponent';

function App() {
  
  return (
    <div className="App">
      <>
        <h2>Concurso de preguntas y respuestas</h2>
        <CategoriesComponent/>
      </>
      {/* <Padre /> */}
      {/* <Categories/> */}
    </div>
  );
}

export default App;
