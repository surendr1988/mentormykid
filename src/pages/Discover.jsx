import React, { useState } from 'react';
import { Compass, Zap, Target, ArrowRight } from 'lucide-react';

const Discover = () => {
    const [activeTab, setActiveTab] = useState('interest');

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--color-growth)20', color: 'var(--color-growth)', marginBottom: '1.5rem' }}>
                        <Compass size={48} />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                        Discover Yourself
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        You are unique. Let's find out what makes you tick through fun, interactive tools.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                    <button
                        onClick={() => setActiveTab('interest')}
                        className={`btn ${activeTab === 'interest' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '0.75rem 2rem' }}>
                        Interest Finder
                    </button>
                    <button
                        onClick={() => setActiveTab('strength')}
                        className={`btn ${activeTab === 'strength' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '0.75rem 2rem' }}>
                        Strength Mapping
                    </button>
                    <button
                        onClick={() => setActiveTab('confidence')}
                        className={`btn ${activeTab === 'confidence' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '0.75rem 2rem' }}>
                        Confidence Meter
                    </button>
                </div>

                {/* Interactive Content Mockups */}
                <div style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: '32px',
                    padding: '4rem 3rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    {activeTab === 'interest' && (
                        <div className="animate-float">
                            <Zap size={64} color="var(--color-energy)" style={{ marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What sparks your curiosity?</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                                Answer a few fun questions to see whether you lean towards creating, leading, analyzing, or exploring.
                            </p>
                            <button className="btn btn-energy" style={{ gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Start Interest Finder <ArrowRight size={20} />
                            </button>
                        </div>
                    )}

                    {activeTab === 'strength' && (
                        <div className="animate-float">
                            <Target size={64} color="var(--color-growth)" style={{ marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What are your hidden superpowers?</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                                Everyone has natural strengths. Let's map your unique abilities—from empathy to problem-solving.
                            </p>
                            <button className="btn btn-growth" style={{ gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Map My Strengths <ArrowRight size={20} />
                            </button>
                        </div>
                    )}

                    {activeTab === 'confidence' && (
                        <div className="animate-float">
                            <Compass size={64} color="var(--color-primary)" style={{ marginBottom: '2rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>How tall are you standing today?</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                                Track your confidence journey. See how your self-belief grows as you learn new skills.
                            </p>
                            <button className="btn btn-primary" style={{ gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Check Confidence Level <ArrowRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Discover;
