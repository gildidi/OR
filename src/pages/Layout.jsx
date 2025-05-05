
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderNavItem = (label, url, submenu = null) => {
    const isActive = currentPageName === url.split("?")[0];
    
    if (submenu) {
      return (
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown(label)}
            className={`flex items-center px-3 py-2 text-sm font-medium ${isActive ? 'text-gold-500' : 'text-navy-100'} hover:text-gold-500 transition-colors`}
          >
            {label}
            <ChevronDown className={`h-4 w-4 mr-1 transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`} />
          </button>
          
          {activeDropdown === label && (
            <div className="absolute z-10 right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg py-1 md:hidden">
              {submenu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.url}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          
          <div className="hidden md:group-hover:block absolute z-10 right-0 mt-0 w-48 origin-top-right bg-white rounded-md shadow-lg py-1">
            {submenu.map((item, idx) => (
              <Link
                key={idx}
                to={item.url}
                className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-50 text-right"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <Link
        to={url}
        onClick={closeMenu}
        className={`px-3 py-2 text-sm font-medium ${isActive ? 'text-gold-500' : 'text-navy-100'} hover:text-gold-500 transition-colors`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <style>
        {`
          :root {
            --color-navy-900: #0a1f44;
            --color-navy-800: #102a59;
            --color-navy-700: #1c3b71;
            --color-navy-600: #2a4d8f;
            --color-navy-500: #3762ad;
            --color-navy-400: #6387c8;
            --color-navy-300: #8eaada;
            --color-navy-200: #b9cced;
            --color-navy-100: #e6edf8;
            --color-navy-50: #f2f6fc;
            
            --color-gold-900: #6a4a00;
            --color-gold-800: #896000;
            --color-gold-700: #aa7700;
            --color-gold-600: #cb8e00;
            --color-gold-500: #eaa400;
            --color-gold-400: #ffb81c;
            --color-gold-300: #ffc54d;
            --color-gold-200: #ffd980;
            --color-gold-100: #ffecb3;
            --color-gold-50: #fff8e6;
          }

          body {
            font-family: 'Assistant', 'Segoe UI', sans-serif;
          }

          .text-gold-500 {
            color: var(--color-gold-500);
          }

          .bg-navy-900 {
            background-color: var(--color-navy-900);
          }

          .text-navy-100 {
            color: var(--color-navy-100);
          }

          .text-navy-800 {
            color: var(--color-navy-800);
          }

          .hover\\:bg-navy-50:hover {
            background-color: var(--color-navy-50);
          }

          .bg-gold-500 {
            background-color: var(--color-gold-500);
          }

          .hover\\:bg-gold-600:hover {
            background-color: var(--color-gold-600);
          }

          .border-gold-500 {
            border-color: var(--color-gold-500);
          }

          .border-navy-700 {
            border-color: var(--color-navy-700);
          }
        `}
      </style>

      {/* Top bar with contact info */}
      <div className="bg-navy-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 space-x-reverse">
            <div className="flex items-center">
              <Phone className="h-4 w-4 ml-1" />
              <span>054-1234567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 ml-1" />
              <span>רחוב הרצל 100, באר שבע</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 ml-1" />
              <span>א'-ה' 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 space-x-reverse">
              <div className="font-serif text-2xl font-bold text-navy-900">
                <span>אור</span>
                <span className="text-gold-500"> ושות'</span>
              </div>
              <div className="text-xs text-navy-800 border-r border-navy-300 pr-3 hidden md:block">עורכי דין | נדל"ן ומיסוי מקרקעין</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 space-x-reverse">
              {renderNavItem("דף הבית", createPageUrl("Home"))}
              {renderNavItem("אודות", createPageUrl("About"))}
              {renderNavItem("תחומי התמחות", "#", [
                { label: "נדל\"ן", url: createPageUrl("PracticeAreas") + "?area=real_estate" },
                { label: "מיסוי מקרקעין", url: createPageUrl("PracticeAreas") + "?area=property_tax" },
                { label: "ליווי משפטי לעסקאות", url: createPageUrl("PracticeAreas") + "?area=transactions" },
                { label: "ייצוג מול רשויות", url: createPageUrl("PracticeAreas") + "?area=authorities" }
              ])}
              {renderNavItem("צוות המשרד", createPageUrl("Team"))}
              {renderNavItem("מאמרים", createPageUrl("Blog"))}
              {renderNavItem("שאלות נפוצות", createPageUrl("FAQ"))}
              {renderNavItem("צור קשר", createPageUrl("Contact"))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-navy-900"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="fixed inset-0 bg-navy-900 bg-opacity-95 z-50 flex flex-col md:hidden">
            <div className="flex justify-between items-center p-4 border-b border-navy-700">
              <div className="font-serif text-2xl font-bold text-white">
                <span>אור</span>
                <span className="text-gold-500"> ושות'</span>
              </div>
              <button
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4 text-right">
              <Link
                to={createPageUrl("Home")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                דף הבית
              </Link>
              <Link
                to={createPageUrl("About")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                אודות
              </Link>
              <div>
                <button
                  onClick={() => toggleDropdown('practice')}
                  className="text-white hover:text-gold-500 text-lg font-medium py-2 flex items-center justify-end w-full"
                >
                  תחומי התמחות
                  <ChevronDown className={`h-5 w-5 mr-1 transition-transform duration-200 ${activeDropdown === 'practice' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'practice' && (
                  <div className="pl-4 flex flex-col space-y-2 mt-2">
                    <Link
                      to={createPageUrl("PracticeAreas") + "?area=real_estate"}
                      onClick={closeMenu}
                      className="text-navy-100 hover:text-gold-500 text-md py-1"
                    >
                      נדל"ן
                    </Link>
                    <Link
                      to={createPageUrl("PracticeAreas") + "?area=property_tax"}
                      onClick={closeMenu}
                      className="text-navy-100 hover:text-gold-500 text-md py-1"
                    >
                      מיסוי מקרקעין
                    </Link>
                    <Link
                      to={createPageUrl("PracticeAreas") + "?area=transactions"}
                      onClick={closeMenu}
                      className="text-navy-100 hover:text-gold-500 text-md py-1"
                    >
                      ליווי משפטי לעסקאות
                    </Link>
                    <Link
                      to={createPageUrl("PracticeAreas") + "?area=authorities"}
                      onClick={closeMenu}
                      className="text-navy-100 hover:text-gold-500 text-md py-1"
                    >
                      ייצוג מול רשויות
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to={createPageUrl("Team")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                צוות המשרד
              </Link>
              <Link
                to={createPageUrl("Blog")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                מאמרים
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                שאלות נפוצות
              </Link>
              <Link
                to={createPageUrl("Contact")}
                onClick={closeMenu}
                className="text-white hover:text-gold-500 text-lg font-medium py-2"
              >
                צור קשר
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-serif text-2xl font-bold mb-4">
                <span>אור</span>
                <span className="text-gold-500"> ושות'</span>
              </div>
              <p className="text-navy-100 mb-4">
                משרד עורכי דין המתמחה בתחום הנדל"ן ומיסוי מקרקעין, מעניק ייעוץ מקצועי ומלווה לקוחות בכל שלבי העסקה.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={createPageUrl("Home")} className="text-navy-100 hover:text-gold-500 transition-colors">
                    דף הבית
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("About")} className="text-navy-100 hover:text-gold-500 transition-colors">
                    אודות
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("PracticeAreas")} className="text-navy-100 hover:text-gold-500 transition-colors">
                    תחומי התמחות
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Team")} className="text-navy-100 hover:text-gold-500 transition-colors">
                    צוות המשרד
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Contact")} className="text-navy-100 hover:text-gold-500 transition-colors">
                    צור קשר
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">צור קשר</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 ml-2 text-gold-500" />
                  <span>054-1234567</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 ml-2 text-gold-500" />
                  <span>רחוב הרצל 100, באר שבע</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 ml-2 text-gold-500" />
                  <span>א'-ה' 9:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-navy-700 mt-8 pt-8 text-sm text-center text-navy-300">
            <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 md:space-x-reverse">
              <Link to={createPageUrl("Privacy")} className="hover:text-gold-500 transition-colors">
                מדיניות פרטיות
              </Link>
              <Link to={createPageUrl("Accessibility")} className="hover:text-gold-500 transition-colors">
                הצהרת נגישות
              </Link>
              <span>&copy; {new Date().getFullYear()} אור ושות' - כל הזכויות שמורות</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
