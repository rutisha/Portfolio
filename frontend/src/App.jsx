// import React from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Footer from './components/Footer';

// const App = () => {
//     return (
//         <>
//             <Header />
//             <main id="main">
//                 <Home />
//                 <About />
//                 <Skills />
//             </main>
//             <Footer />
//         </>
//     );
// };

// export default App;

// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;