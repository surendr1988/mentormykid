import React, { useState } from 'react';
import { PlayCircle, Clock } from 'lucide-react';

const CATEGORIES = ["All", "Behaviour", "Communication", "Thinking", "Career", "Self Discovery"];

const VIDEOS = [
    { id: 1, title: "Handling Anger Before It Handles You", cat: "Behaviour", thumb: "var(--color-primary)", duration: "4:15" },
    { id: 2, title: "Speak Without Fear in Class", cat: "Communication", thumb: "var(--color-highlight)", duration: "5:30" },
    { id: 3, title: "Smart Decisions vs Following the Crowd", cat: "Thinking", thumb: "var(--color-energy)", duration: "6:20" },
    { id: 4, title: "Jobs of the Future Explained", cat: "Career", thumb: "var(--color-growth)", duration: "8:10" },
    { id: 5, title: "How to Find Your Hidden Strengths", cat: "Self Discovery", thumb: "#FF7B54", duration: "7:45" },
    { id: 6, title: "Building True Confidence (Not Ego)", cat: "Behaviour", thumb: "var(--color-primary)", duration: "5:55" },
    { id: 7, title: "Listening: The Superpower Nobody Talks About", cat: "Communication", thumb: "var(--color-highlight)", duration: "4:40" },
    { id: 8, title: "Careers Beyond the Textbook", cat: "Career", thumb: "var(--color-growth)", duration: "6:15" },
];

const VideoCard = ({ video }) => (
    <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'transform 0.2s',
        cursor: 'pointer'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ backgroundColor: video.thumb, height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <PlayCircle size={48} color="rgba(255,255,255,0.8)" />
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> {video.duration}
            </div>
        </div>
        <div style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: video.thumb, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{video.cat}</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0', lineHeight: 1.4, color: 'var(--color-text-primary)' }}>{video.title}</h3>
        </div>
    </div>
);

const Videos = () => {
    const [activeCat, setActiveCat] = useState("All");

    const filteredVideos = activeCat === "All" ? VIDEOS : VIDEOS.filter(v => v.cat === activeCat);

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                        Video Hub
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Bite-sized life skills lessons designed specifically for developing minds.
                    </p>
                </div>

                {/* Category Filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`btn ${activeCat === cat ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ padding: '0.5rem 1.5rem', fontSize: '0.95rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Video Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {filteredVideos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                {filteredVideos.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>
                        No videos found for this category yet.
                    </div>
                )}

            </div>
        </div>
    );
};

export default Videos;
