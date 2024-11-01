// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-[15vh] bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className='ml-5'>
                    <h4 className="text-lg font-bold">Información de contacto</h4>
                    <p className="text-sm">Email: jagredo03@gmail.com</p>
                    <p className="text-sm">Teléfono: +57 3176980852</p>
                </div>
                <div className='mr-5'>
                    <h4 className="text-lg font-bold">Sígueme</h4>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm">
                &copy; {new Date().getFullYear()} Juan Sebastian Amezquita.
            </div>
        </footer>
    );
};

export default Footer;
