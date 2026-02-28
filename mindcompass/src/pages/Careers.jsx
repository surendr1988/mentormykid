import React from 'react';
import { Rocket, Cpu, Palette, LineChart, Brain, Globe, Sparkles } from 'lucide-react';

const CareerCard = ({ icon: Icon, title, desc, tag, color }) => (
    <div style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius: '24px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        transition: 'transform 0.3s ease',
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: '16px', color: color, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <Icon size={32} />
        </div>
        <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{title}</h3>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tag}</span>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
    </div>
);

const Careers = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="badge" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-growth)' }}>Career Explorer</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                        Careers Beyond Marks
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        The world is changing fast. Here are some exciting paths you can explore that rely on your unique skills and passions.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    <CareerCard
                        icon={Cpu} title="Artificial Intelligence" tag="Tech & Logic" color="var(--color-primary)"
                        desc="Teach computers how to think and solve complex problems. You'll build the brain behind robots and smart apps."
                    />
                    <CareerCard
                        icon={Palette} title="Design & Creation" tag="Art & Empathy" color="var(--color-highlight)"
                        desc="Make things beautiful and easy to use. Designers imagine everything from phone apps to the clothes we wear."
                    />
                    <CareerCard
                        icon={Rocket} title="Space Exploration" tag="Science & Courage" color="#FF7B54"
                        desc="Discover new worlds, design rockets, or study the stars. The sky is literally not the limit."
                    />
                    <CareerCard
                        icon={LineChart} title="Entrepreneurship" tag="Leadership" color="var(--color-energy)"
                        desc="Have a great idea? Start your own business. Be the boss and create solutions that help people."
                    />
                    <CareerCard
                        icon={Brain} title="Psychology" tag="Understanding Minds" color="var(--color-success)"
                        desc="Help people understand their thoughts and feelings. Make the world happier and healthier."
                    />
                    <CareerCard
                        icon={Globe} title="Environment Tech" tag="Saving Earth" color="var(--color-growth)"
                        desc="Invent new ways to stop pollution and harness clean energy to protect our beautiful planet forever."
                    />
                </div>

                {/* Future Jobs 2035 Section */}
                <div style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    borderRadius: '32px',
                    padding: '4rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', backgroundColor: 'var(--color-highlight)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5 }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ backgroundColor: 'var(--color-energy)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <Sparkles size={32} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Future Jobs 2035</h2>
                        </div>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
                            Many jobs of the future haven't even been invented yet! A "Robot Ethics Manager" or "Interstellar Tour Guide" might be your future title.
                        </p>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                            That's why learning <strong>how to think</strong> is more important than memorizing facts. The future belongs to those who are adaptable and creative.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Careers;
