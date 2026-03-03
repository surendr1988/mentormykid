import React from 'react';
import { BrainCircuit, MessageCircle, Lightbulb, Apple, CheckCircle2 } from 'lucide-react';

const ModuleSection = ({ title, icon: Icon, color, topics }) => (
    <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: '24px',
        padding: '3rem',
        marginBottom: '2rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
        border: `2px solid ${color}20`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: `${color}15`, padding: '1rem', borderRadius: '16px', color: color }}>
                <Icon size={40} />
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--color-text-primary)' }}>{title}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {topics.map((topic, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 color={color} size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{topic.name}</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>{topic.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Learn = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="badge" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-highlight)' }}>Core Curriculum</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                        Learn Life Skills
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Modules designed to build resilience, empathy, and practical knowledge for the real world.
                    </p>
                </div>

                <ModuleSection
                    title="Behaviour Intelligence"
                    icon={BrainCircuit}
                    color="var(--color-primary)"
                    topics={[
                        { name: "Handling Emotions", desc: "Understanding what you feel and why." },
                        { name: "Respect", desc: "Treating others the way you want to be treated." },
                        { name: "Discipline", desc: "Doing what needs to be done, even on tough days." },
                        { name: "Confidence", desc: "Believing in your own abilities." }
                    ]}
                />

                <ModuleSection
                    title="Communication Skills"
                    icon={MessageCircle}
                    color="var(--color-highlight)"
                    topics={[
                        { name: "Speaking Clearly", desc: "Making sure your voice is heard." },
                        { name: "Active Listening", desc: "Understanding the other side of the story." },
                        { name: "Saying NO", desc: "Setting boundaries without feeling bad." },
                        { name: "Expressing Ideas", desc: "Turning your thoughts into powerful words." }
                    ]}
                />

                <ModuleSection
                    title="Critical Thinking"
                    icon={Lightbulb}
                    color="var(--color-energy)"
                    topics={[
                        { name: "Decision Making", desc: "Choosing the right path when options are confusing." },
                        { name: "Avoiding Peer Pressure", desc: "Standing firm in what you believe is right." },
                        { name: "Thinking Independently", desc: "Questioning things instead of just following." }
                    ]}
                />

                <ModuleSection
                    title="Food Intelligence"
                    icon={Apple}
                    color="var(--color-success)"
                    topics={[
                        { name: "Brain Foods", desc: "What to eat to focus better." },
                        { name: "Junk Awareness", desc: "Understanding how fast food affects your mood." },
                        { name: "Energy Habits", desc: "Eating routines that keep you active all day." }
                    ]}
                />

            </div>
        </div>
    );
};

export default Learn;
