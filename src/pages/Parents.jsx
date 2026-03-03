import React from 'react';
import { Shield, Heart, Users, Compass, BookOpen } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, desc, color }) => (
    <div style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius: '24px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        borderTop: `6px solid ${color}`
    }}>
        <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: '50%', color: color, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0', color: 'var(--color-text-primary)' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
        <button style={{
            marginTop: '1rem',
            background: 'none',
            border: 'none',
            color: color,
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        }}>
            Read Guide &rarr;
        </button>
    </div>
);

const Parents = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)10', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                        <Heart size={48} fill="currentColor" />
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                        Parents Corner
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Your child is discovering who they are. Here are resources to help you guide them without comparing them.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <ResourceCard
                        icon={Shield}
                        title="Guiding Confidence"
                        color="var(--color-primary)"
                        desc="How to praise the process, not just the result. Help your child build a self-esteem that isn't dependent on grades."
                    />
                    <ResourceCard
                        icon={Users}
                        title="Managing Peer Pressure"
                        color="var(--color-highlight)"
                        desc="Tools to help them say NO respectfully, set boundaries, and choose friends who lift them up."
                    />
                    <ResourceCard
                        icon={Compass}
                        title="Career Awareness"
                        color="var(--color-growth)"
                        desc="The world of work is changing. Learn how to encourage their unique interests instead of pushing traditional paths."
                    />
                </div>

                {/* Note section */}
                <div style={{ backgroundColor: 'var(--color-bg)', padding: '3rem', borderRadius: '24px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <BookOpen size={48} color="var(--color-text-secondary)" style={{ flexShrink: 0 }} />
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>"Schools teach subjects. We teach life."</h3>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                            This platform isn't about getting better marks. It's about developing emotional intelligence, communication, and critical thinking—the real skills needed for future readiness. Let's work together to nurture well-rounded human beings.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Parents;
