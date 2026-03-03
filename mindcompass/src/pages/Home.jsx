import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, MessageCircle, Lightbulb, Apple, Rocket, User, Shield, Users, Clock, ChevronRight, Star } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, modules, color }) => (
    <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: '12px',
        border: '1px solid #E4E7EB',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s',
        cursor: 'pointer',
        overflow: 'hidden'
    }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
        <div style={{ padding: '2rem 1.5rem', backgroundColor: `var(--color-bg)`, display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #E4E7EB' }}>
            <Icon size={48} color={color} />
        </div>
        <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: 'var(--color-text-primary)' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <Clock size={16} /> <span>{modules} Modules</span>
            </div>
            <Link to={`/explore`} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                Explore Program <ChevronRight size={16} />
            </Link>
        </div>
    </div>
);

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            {/* Whizlabs-style Hero Section */}
            <section style={{ backgroundColor: '#1F2933', color: 'var(--color-white)', padding: '4rem 2rem 6rem', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1 1 500px', maxWidth: '600px', zIndex: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#FFD166' }}>
                            <Star size={20} fill="#FFD166" />
                            <Star size={20} fill="#FFD166" />
                            <Star size={20} fill="#FFD166" />
                            <Star size={20} fill="#FFD166" />
                            <Star size={20} fill="#FFD166" />
                            <span style={{ color: '#E4E7EB', fontSize: '0.9rem', marginLeft: '0.5rem' }}>4.8/5 by 10,000+ Parents</span>
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, margin: '0 0 1.5rem 0' }}>
                            Build the <span style={{ color: 'var(--color-growth)' }}>Life Skills</span><br />
                            Schools Don't Teach.
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: '#9AA5B1', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Empower your child with behaviour intelligence, clear communication, and critical thinking. Join the movement to prepare kids for real life.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-growth" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Explore Programs</button>
                            <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', color: 'var(--color-white)', borderColor: 'var(--color-white)' }}>View Free Content</button>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                        {/* Hero Illustration/Image */}
                        <img src="/images/hero_student.png" alt="Student learning happily on a tablet" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                    </div>
                </div>

                {/* Background decorative elements */}
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.3 }} />
            </section>

            {/* Statistics Bar (Overlapping) */}
            <div className="container" style={{ position: 'relative', marginTop: '-3rem', zIndex: 10 }}>
                <div style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: '12px',
                    padding: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    gap: '2rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>50+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontWeight: 500 }}>Life Modules</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-growth)', margin: 0 }}>10k+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontWeight: 500 }}>Active Learners</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-energy)', margin: 0 }}>100+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontWeight: 500 }}>School Partners</p>
                    </div>
                </div>
            </div>

            {/* Programs Section (Whizlabs 'Courses' Style) */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Explore Life Skills Programs</h2>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', margin: 0 }}>Structured learning paths designed for 10-15 year olds.</p>
                        </div>
                        <button className="btn btn-secondary" style={{ borderColor: '#E4E7EB', color: 'var(--color-text-primary)' }}>View All Programs</button>
                    </div>

                    {/* Category Tabs Mockup */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '999px', fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer' }}>All Programs</span>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-white)', border: '1px solid #E4E7EB', color: 'var(--color-text-secondary)', borderRadius: '999px', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer' }}>Behaviour</span>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-white)', border: '1px solid #E4E7EB', color: 'var(--color-text-secondary)', borderRadius: '999px', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer' }}>Communication</span>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-white)', border: '1px solid #E4E7EB', color: 'var(--color-text-secondary)', borderRadius: '999px', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer' }}>Careers</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        <ProgramCard icon={BrainCircuit} title="Behaviour Intelligence" modules="12" color="var(--color-primary)" />
                        <ProgramCard icon={MessageCircle} title="Communication Skills" modules="8" color="var(--color-highlight)" />
                        <ProgramCard icon={Lightbulb} title="Critical Thinking" modules="10" color="var(--color-energy)" />
                        <ProgramCard icon={Apple} title="Food Intelligence" modules="6" color="var(--color-success)" />
                        <ProgramCard icon={Rocket} title="Career Explorer" modules="15" color="var(--color-growth)" />
                        <ProgramCard icon={User} title="Discover Yourself" modules="5" color="#FF7B54" />
                    </div>
                </div>
            </section>

            {/* Why Choose MindCompass Section */}
            <section className="section-py" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Why MindCompass?</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-growth)', opacity: 0.9, borderRadius: '12px', flexShrink: 0 }}>
                                    <Shield size={32} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Practical Life Application</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>We focus purely on skills that children use every day—managing anger, speaking up in class, and making healthy choices.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary)', opacity: 0.9, borderRadius: '12px', flexShrink: 0 }}>
                                    <BrainCircuit size={32} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Expert-Designed Content</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>Modules are crafted by child psychologists and educators to resonate with the 10-15 age group seamlessly.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-highlight)', opacity: 0.9, borderRadius: '12px', flexShrink: 0 }}>
                                    <Users size={32} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Parent-Child Alignment</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>We bridge the communication gap, providing resources for parents to connect with their children effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                        <img src="/images/student_lightbulb.png" alt="Student having a lightbulb moment" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="section-py" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', flexDirection: 'row-reverse' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>Learning is Better Together</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Our programs encourage collaboration, discussion, and peer-to-peer learning. We believe that shared experiences build stronger emotional intelligence and more confident communicators.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>10k+</h4>
                                <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Student Community</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', color: 'var(--color-growth)', margin: '0 0 0.5rem 0' }}>5k+</h4>
                                <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Group Projects</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                        <img src="/images/group_collaborating.png" alt="Students collaborating and enjoying learning" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ backgroundColor: 'var(--color-primary)', padding: '4rem 2rem', textAlign: 'center', color: 'var(--color-white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Ready to Future-Proof Your Child?</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                        Join thousands of parents investing in their children's real-world intelligence today.
                    </p>
                    <button className="btn btn-growth" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', border: 'none' }}>Get Started for Free</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
