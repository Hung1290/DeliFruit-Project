import './App.scss';
import NavHeader from './components/navigation/NavHeader';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';

function App() {
  return (
    <>
      <Router>
        <>
          <div className='app-header'>
            <NavHeader />
          </div>
          <div className='app-container pt-3'>
            <AppRoutes />
          </div>
          <div className=''>
            <Cart />
          </div>
          <div className=''>
            <Footer />
          </div>
        </>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  );
}

export default App;
