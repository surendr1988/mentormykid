import React from 'react';
import { Apple, BatteryCharging, Smile, XOctagon } from 'lucide-react';

const Food = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '900px' }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="badge" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-success)' }}>Smart Food</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                        Fuel Your <span style={{ color: 'var(--color-success)' }}>Brain.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
                        What you eat literally becomes your body and mind. Choose wisely.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* Brain Foods */}
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '24px' }} className="flex-responsive">
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Apple size={36} color="var(--color-success)" />
                                <h2 style={{ fontSize: '2rem', margin: 0 }}>Brain Foods</h2>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                Your brain is constantly working, even while you sleep. To run smoothly, it requires premium fuel.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-primary)' }}>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🧠 <strong>Nuts & Seeds:</strong> For memory and focus</li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🥑 <strong>Avocados:</strong> Healthy fats for brain growth</li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🫐 <strong>Berries:</strong> Antioxidants to protect your brain</li>
                            </ul>
                        </div>
                        <div style={{ flex: 1, height: '250px', backgroundColor: 'var(--color-success)20', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                            🥗 🍓 🥜
                        </div>
                    </div>

                    {/* Junk Impact */}
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '24px', flexDirection: 'row-reverse' }} className="flex-responsive">
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <XOctagon size={36} color="#FF7B54" />
                                <h2 style={{ fontSize: '2rem', margin: 0 }}>The Junk Impact</h2>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                Processed foods give you a quick spike, followed by a huge crash.
                            </p>
                            <p style={{ color: 'var(--color-text-primary)' }}>
                                Too much sugar can make it hard to concentrate, trigger mood swings, and steal your natural energy when you need it most for studying or playing.
                            </p>
                        </div>
                        <div style={{ flex: 1, height: '250px', backgroundColor: '#FF7B5420', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                            🍔 🍭 🚫
                        </div>
                    </div>

                    {/* Food and Mood / Energy */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '24px' }}>
                            <Smile size={36} color="var(--color-energy)" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Food & Mood</h2>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Did you know 90% of serotonin (the "happy chemical") is made in your gut? A healthy tummy means a happier mood and less anxiety.
                            </p>
                        </div>
                        <div style={{ backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '24px' }}>
                            <BatteryCharging size={36} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Energy Habits</h2>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Don't skip breakfast. Drink water instead of sugary sodas. Learn to read food labels and take charge of your own tank!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 768px) {
          .flex-responsive {
            flex-direction: column !important;
          }
        }
      `}} />
        </div>
    );
};

export default Food;
