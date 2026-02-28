import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header style={{
            backgroundColor: 'var(--color-bg)',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Compass color="var(--color-primary)" size={32} />
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>MindCompass</span>
            </Link>

            <nav style={{ display: 'none' }} className="nav-desktop">
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
                    <li><Link to="/learn" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Learn</Link></li>
                    <li><Link to="/discover" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Discover</Link></li>
                    <li><Link to="/careers" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Careers</Link></li>
                    <li><Link to="/food" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Smart Food</Link></li>
                    <li><Link to="/parents" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Parents</Link></li>
                    <li><Link to="/videos" style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Videos</Link></li>
                </ul>
            </nav>

            <Menu className="mobile-menu" size={28} color="var(--color-text-primary)" />
        </header>
    );
};

export default Navbar;
