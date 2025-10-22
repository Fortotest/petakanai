
"use client";

import { Header } from '@/components/header';
import { HardHat } from 'lucide-react';

export default function MarketInsightsMaintenancePage() {
    return (
        <>
            <Header />
            <main className="container mx-auto max-w-3xl px-4 pt-16 pb-12">
                <div className="flex flex-col items-center justify-center text-center space-y-6 bg-muted/30 p-8 md:p-12 rounded-2xl">
                    <HardHat className="w-16 h-16 text-primary" />
                    <div className="space-y-3">
                        <h1 className="text-h2 font-semibold tracking-tight">System Maintenance</h1>
                        <p className="text-body text-muted-foreground max-w-md">
                            The <span className="font-semibold text-foreground">Market Insights</span> page is currently being updated to provide more accurate and relevant data. Please check back later!
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
