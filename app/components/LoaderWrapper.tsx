'use client';
import Image from 'next/image';
import gif from '@/public/img/gif/eyes.gif'
import { useEffect, useState } from 'react';

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#296acd]"> 
         <Image src={gif} alt="Cargando..." className="w-100 h-50 object-cover" />
      </div>
    );
  }

  return <>{children}</>;
}
