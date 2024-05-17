// src/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <ul className="space-y-2 p-4">
                <li>
                    <a href="#home" className="block px-4 py-2 rounded hover:bg-gray-700">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="block px-4 py-2 rounded hover:bg-gray-700">
                        About
                    </a>
                </li>
                <li>
                    <button
                        onClick={toggleSubmenu}
                        className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Services
                    </button>
                    {isSubmenuOpen && (
                        <ul className="space-y-1 pl-4">
                            <li>
                                <a href="#web-development" className="block px-4 py-2 rounded hover:bg-gray-700">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#app-development" className="block px-4 py-2 rounded hover:bg-gray-700">
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="#seo" className="block px-4 py-2 rounded hover:bg-gray-700">
                                    SEO
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="#contact" className="block px-4 py-2 rounded hover:bg-gray-700">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
