import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Items from './components/Items';
import ItemDetailed from './components/Detail';
import ErrorPage from './components/ErrorPage';
import { getItems } from './redux/items/items';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems('equipment'));
  }, [dispatch]);

  return (
    <Router>
      <main>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/:name/:id" element={<ItemDetailed />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
