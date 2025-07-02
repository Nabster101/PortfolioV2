import type { Metadata } from 'next';
import PortfolioPage from '@/app/components/PortfolioPage'; 

export const metadata: Metadata = {
  title: 'Pietro Costanzi Fantini',
  description: 'Portfolio of Pietro Costanzi Fantini',
};

// This is now a simple Server Component
export default function Home() {
  return (
    <main>
      <PortfolioPage /> 
    </main>
  );
}