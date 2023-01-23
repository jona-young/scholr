
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header.js';
import SideMenu from './Layouts/SideMenu.js';
import Footer from './Layouts/Footer.js';


function App() {

  // implement routes here <Route path="urlPath" element={<componentName />} />
  return (
    <div className="App">

      <BrowserRouter>
          <Header />
          <SideMenu />
          <Routes>

          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
