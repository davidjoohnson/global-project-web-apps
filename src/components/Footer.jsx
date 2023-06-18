import React, { useEffect, useState } from 'react';
import './footer.css';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            const triggerPosition =
                document.documentElement.scrollHeight - window.innerHeight;

            setShowFooter(scrollPosition >= triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer class="footer" style={{ display: showFooter ? 'block' : 'none' }}>
            <div class="footer-content">
                <div class="box">
                    <p>
                        © 2023 MyWebCV, created by David Garcia or most common by Joohnson.
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
