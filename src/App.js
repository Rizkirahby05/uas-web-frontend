import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BookProvider } from './BookContext';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Router />
      </BookProvider>
    </div>
  );
}

export default App;