import React from 'react';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#1F2933',
            color: 'var(--color-white)',
            padding: '4rem 2rem 2rem'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Compass color="var(--color-energy)" size={32} />
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>MindCompass</h2>
                    </div>
                    <p style={{ color: '#9AA5B1', lineHeight: 1.6 }}>
                        Helping Young Minds Discover Direction Before the World Defines Them. Designed for the leaders of tomorrow.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Programs</h3>
                    <Link to="/explore" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Behaviour Intelligence</Link>
                    <Link to="/explore" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Communication Skills</Link>
                    <Link to="/explore" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Critical Thinking</Link>
                    <Link to="/explore" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Food Intelligence</Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Resources</h3>
                    <Link to="/parents" style={{ color: '#9AA5B1', textDecoration: 'none' }}>For Parents</Link>
                    <Link to="/careers" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Career Explorer</Link>
                    <Link to="/videos" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Video Library</Link>
                    <Link to="/discover" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Self Discovery Test</Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Company</h3>
                    <Link to="/about" style={{ color: '#9AA5B1', textDecoration: 'none' }}>About Us</Link>
                    <Link to="/contact" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Contact</Link>
                    <Link to="/privacy" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Privacy Policy</Link>
                    <Link to="/terms" style={{ color: '#9AA5B1', textDecoration: 'none' }}>Terms of Service</Link>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#9AA5B1', margin: 0 }}>
                    © {new Date().getFullYear()} MindCompass. All rights reserved.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {/* Social Icons Placeholder */}
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
