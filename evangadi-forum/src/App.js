
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import HomePage from './pages/homepage/HomePage';
import Register from './pages/registration/Register';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Container } from 'react-bootstrap';

// import Login from './pages/Login/Login';



function App() {
  return (

    <div className="App">
      <Header />
      <main className='py-5'>
      <Container>
      <Routes>
      <Route path='/' element={<HomePage />} exact/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} exact/>
        {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>
      </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
