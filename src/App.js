import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      {/* <h3 style={{ fontFamily: "Vazir" }}>اپلیکیشن مدیریت</h3> */}
      <button className='btn btn-primary data-bs-toggle'>Contact</button>
      <br />
      <span className='bx bxs-user'></span>

      <Navbar />

    </div>
  );
}

export default App;