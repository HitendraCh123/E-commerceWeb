import { useEffect } from 'react';
import 'primeicons/primeicons.css';
import './App.css'
import Header from './Components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SecondSection from './Components/Second-section';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';
import FifthSection from './Components/FifthSection';
import SixthSection from './Components/SixthSection';
import SeventhSection from './Components/SeventhSection';
import EighthSection from './Components/EighthSection';
import NinthSection from './Components/NinthSection';
import TenthSection from './Components/TenthSecton';
import Footer from './Components/Footer';
import Contact from './Components/Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Search from './Components/Pages/Search';

const router = createBrowserRouter(





  [
    {
      path: '/',
      element: <div>
        <Header />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <TenthSection />
        <Footer />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Header />
        <About />
      </div>
    },


    {
      path: '/service',
      element: <div>
        <Header />
        <Service />
        <SeventhSection />
        <NinthSection />
        <TenthSection />
        <Footer />
      </div>
    },

    {
      path: '/element',
      element: <div>
        <Header />
      </div>
    },
    {
      path: '/extrapage',
      element: <div>
        <Header />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Header />
        <Contact />
        <SeventhSection />
        <NinthSection />
        <TenthSection />
        <Footer />
      </div>
    },
    {
      path: '/search',
      element: <div>
        <Header />
        {/* <SecondSection /> */}
        <Search />
      </div>
    },
  ]
)
function App() {


  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration is in ms
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
