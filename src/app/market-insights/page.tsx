
"use client";

import dynamic from 'next/dynamic';
import { Header } from '@/components/header';
import { Loader2 } from 'lucide-react';

const MarketInsightsContent = dynamic(() => import('./market-insights-content').then(mod => mod.default), {
    loading: () => (
      <div className="flex flex-col items-center justify-center text-center p-8 h-96">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="mt-4 text-lg font-semibold">AI sedang merangkum data pasar...</p>
        <p className="text-muted-foreground text-caption">Tunggu sebentar, kami siapkan wawasan terbaik untukmu.</p>
      </div>
    ),
    ssr: false 
});

export default function MarketInsightsPage() {
    return (
        <>
            <Header />
            <MarketInsightsContent />
        </>
    );
}
