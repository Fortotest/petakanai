
"use client";

import dynamic from 'next/dynamic';
import { Header } from '@/components/header';

const MarketInsightsContent = dynamic(() => import('./market-insights-content').then(mod => mod.default), {
    loading: () => <div className="flex justify-center items-center h-64"><p>Loading...</p></div>,
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
