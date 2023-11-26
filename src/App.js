import './App.css';
import ProductsPage from './components/ProductsPage';

/* Components Hierarchy:
1. ProductsPage - state here
1.1. SearchBar
1.2. ProductTable
1.2.1. ProductRow */

function App() {
  return (
    <div className="App">
      <ProductsPage />
    </div>
  );
}

export default App;
