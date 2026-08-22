'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import StickyContactIcons from '../stickyicons/stickyIcons';

type MediaItem = {
  src: string;
  type: 'image' | 'video';
  alt?: string;
};

// ✅ Automatically generate media items
const generateMedia = (
  count: number,
  type: 'image' | 'video',
  ext: string
): MediaItem[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/gallery/${type}-${i + 1}.${ext}`,
    type,
    alt: `${type === 'image' ? 'Image' : 'Video'} ${i + 1}`,
  }));

// Example: 10 images & 3 videos (you can easily increase later)
const mediaItems: MediaItem[] = [
  ...generateMedia(45, 'image', 'jpg'),
  ...generateMedia(1, 'video', 'mp4'),
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = mediaItems.filter((item) =>
    activeTab === 'images' ? item.type === 'image' : item.type === 'video'
  );

  useEffect(() => {
    if (!selectedMedia) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedMedia]);

  return (
    <>
      <Navbar />

      <main className="site-page mt-16 min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="mb-4 text-4xl font-extrabold">
            Invisible Grill and Safety Net Installation Gallery
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-[var(--text-secondary)]">
            Explore our premium safety installations, invisible grills, and pigeon protection
            solutions — through photos and videos.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => setActiveTab('images')}
              aria-pressed={activeTab === 'images'}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'images'
                  ? 'site-cta'
                  : 'site-card hover:border-[var(--brand-ice)]'
              }`}
            >
              Photos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              aria-pressed={activeTab === 'videos'}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'site-cta'
                  : 'site-card hover:border-[var(--brand-ice)]'
              }`}
            >
              Videos
            </button>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Open ${item.alt || item.type}`}
                className="site-card group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt || 'Gallery image'}
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Preview */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery preview"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                aria-label="Close gallery preview"
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
              >
                ×
              </button>

              {selectedMedia.type === 'image' ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt || 'Preview'}
                  width={1000}
                  height={700}
                  className="object-contain max-h-[80vh] rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[80vh] rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </main>

      <StickyContactIcons />
      <Footer />
    </>
  );
}
