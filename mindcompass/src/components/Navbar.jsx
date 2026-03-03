import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, Search, Grid } from 'lucide-react';

const Navbar = () => {
    return (
        <header style={{
            backgroundColor: 'var(--color-white)',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            gap: '2rem'
        }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
                <Compass color="var(--color-primary)" size={32} />
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>MindCompass</span>
            </Link>

            {/* Explore dropdown + Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: '600px', gap: '1rem' }} className="nav-desktop">
                <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '1rem'
                }}>
                    <Grid size={20} />
                    Programs
                </button>

                <div style={{
                    display: 'flex', alignItems: 'center', flex: 1,
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    border: '1px solid #E4E7EB'
                }}>
                    <Search size={20} color="var(--color-text-secondary)" />
                    <input
                        type="text"
                        placeholder="Search for Life Skills, Programs..."
                        style={{
                            border: 'none', background: 'transparent',
                            width: '100%', padding: '0.25rem 0.5rem',
                            outline: 'none', fontSize: '0.95rem',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                </div>
            </div>

            {/* Links and Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="nav-desktop">
                <Link to="/parents" style={{ fontWeight: 600, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>For Parents</Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem' }}>Log in</button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Sign up</button>
                </div>
            </div>

            <Menu className="mobile-menu" size={28} color="var(--color-text-primary)" />
        </header>
    );
};

export default Navbar;
