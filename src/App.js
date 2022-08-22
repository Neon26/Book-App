import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './forms/loginForm';
import LogOut from './views/LogOut';
import RegisterForm from './forms/registerForm';
import ReadingListPage from './views/ReadingListPage';
import Book from './components/Book';
import { Box } from '@mui/system';
import {Route, Router, Routes} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Snackbar from './components/Snackbar';
import CreateBook from './views/CreateBook';
import BrowseBooks from './views/BrowseBooks';


const HomePage = () => (<h1>Welcome to Things With Feelings</h1>)

function App() {
  const {user} = useContext(AppContext);
  return (
    <>
    <Snackbar/>
      <NavBar>
          <Box sx={{minHeight: '90vh'}}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/book" element={<Book />} />
              <Route path="/create" element={<CreateBook />} />
              <Route path="/browse" element={<BrowseBooks />} />
              <Route path="/readinglist" element={<ReadingListPage />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>              
          </Box>
      </NavBar>
      
    </>
  );
}

export default App;
