import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import PracticeAreas from "./PracticeAreas";

import Team from "./Team";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import FAQ from "./FAQ";

import Contact from "./Contact";

import Privacy from "./Privacy";

import Accessibility from "./Accessibility";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    PracticeAreas: PracticeAreas,
    
    Team: Team,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    FAQ: FAQ,
    
    Contact: Contact,
    
    Privacy: Privacy,
    
    Accessibility: Accessibility,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/PracticeAreas" element={<PracticeAreas />} />
                
                <Route path="/Team" element={<Team />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Privacy" element={<Privacy />} />
                
                <Route path="/Accessibility" element={<Accessibility />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}