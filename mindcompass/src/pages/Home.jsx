import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, MessageCircle, Lightbulb, Apple, Rocket, User, Shield, Users, BookOpen, ChevronRight } from 'lucide-react';

const Card = ({ icon: Icon, title, description, color }) => (
    <div style={{
        backgroundColor: 'var(--color-white)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ padding: '1rem', backgroundColor: `${color}20`, borderRadius: '12px', color: color }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', margin: 0 }}>{description}</p>
    </div>
);

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-bg)',
                padding: '6rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', backgroundColor: 'var(--color-highlight)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', backgroundColor: 'var(--color-growth)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2 }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <span className="badge" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-energy)', color: 'var(--color-text-primary)' }}>
                        For Children Aged 10–15
                    </span>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Build Confidence.<br />Think Clearly.<br />Discover Your Future.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        A life skills platform to grow beyond marks and understand themselves.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/learn" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Learning
                        </Link>
                        <Link to="/discover" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Discover Yourself
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why MindCompass? */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                            Schools teach subjects.<br />
                            <span style={{ color: 'var(--color-growth)' }}>We teach life.</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                            We help children build the emotional and practical foundation they need to thrive.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-success)' }} /> Handle emotions</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} /> Speak confidently</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-highlight)' }} /> Think independently</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-growth)' }} /> Make better choices</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-energy)' }} /> Discover interests</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Kids Will Learn */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What You'll Learn</h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Master the skills that matter most for your future.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <Card
                            icon={BrainCircuit}
                            title="Behaviour Intelligence"
                            description="Confidence, emotional control, respect, and discipline."
                            color="var(--color-primary)"
                        />
                        <Card
                            icon={MessageCircle}
                            title="Communication Skills"
                            description="Speaking clearly, listening, and expressing ideas fearlessly."
                            color="var(--color-highlight)"
                        />
                        <Card
                            icon={Lightbulb}
                            title="Critical Thinking"
                            description="Decision making and avoiding peer pressure."
                            color="var(--color-energy)"
                        />
                        <Card
                            icon={Apple}
                            title="Food Intelligence"
                            description="Food & mood connections, building energy habits."
                            color="var(--color-success)"
                        />
                        <Card
                            icon={Rocket}
                            title="Career Explorer"
                            description="Future jobs explained simply (AI, Space, Environment)."
                            color="var(--color-growth)"
                        />
                        <Card
                            icon={User}
                            title="Discover Yourself"
                            description="Map your strengths and find your true interests."
                            color="#FF7B54"
                        />
                    </div>
                </div>
            </section>

            {/* Designed For */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Designed For Everyone</h2>
                        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                                    <User size={48} color="var(--color-primary)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem' }}>Students (10-15)</h3>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                                    <Shield size={48} color="var(--color-growth)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem' }}>Parents</h3>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem' }}>
                                    <BookOpen size={48} color="var(--color-highlight)" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem' }}>Schools</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 700 }}>Our Mission</h2>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, fontStyle: 'italic' }}>
                        "Helping children discover who they are before comparison defines them."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
