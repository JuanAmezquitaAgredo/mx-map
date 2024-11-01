// src/app/page.tsx
import Footer from '@/components/footer';
import MapWrapper from '@/components/MapWrapper';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-[#F0F4F8]">
      <h1 className="text-3xl font-bold text-[#2D3748] mb-6 mt-5">
        Rutas y MX Antioquia
      </h1>
      <MapWrapper />
      <Footer />
    </main>
  );
}
