import React from 'react';
import { Compass } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-white)',
            padding: '4rem 2rem 2rem'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Compass color="var(--color-energy)" size={32} />
                    <h2 style={{ margin: 0 }}>MindCompass</h2>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
                    Helping Young Minds Discover Direction Before the World Defines Them
                </p>
                <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    © {new Date().getFullYear()} MindCompass. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
