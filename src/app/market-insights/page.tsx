"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ComposedChart, Line } from 'recharts';
import { Separator } from '@/components/ui/separator';
import { BarChart as RechartsBarChart } from 'recharts';
import { Clock, Percent, Zap, Sparkles } from 'lucide-react';
import { Header } from '@/components/header';

const marketShareData = [
    { name: 'Tokopedia & TikTok', value: 39 },
    { name: 'Shopee', value: 37 },
    { name: 'Lazada', value: 10 },
    { name: 'Bukalapak', value: 6 },
    { name: 'Blibli', value: 5 },
];

const marketShareChartConfig = {
  value: { label: 'Value' },
  'Tokopedia & TikTok': { label: 'Tokopedia & TikTok', color: 'hsl(var(--primary))' },
  'Shopee': { label: 'Shopee', color: 'hsl(var(--primary))' },
  'Lazada': { label: 'Lazada', color: 'hsl(var(--primary))' },
  'Bukalapak': { label: 'Bukalapak', color: 'hsl(var(--primary))' },
  'Blibli': { label: 'Blibli', color: 'hsl(var(--primary))' },
} satisfies ChartConfig;


const gmvComboData = [
    { month: 'Jan', shopee: 1800, tokopedia: 1500, average: 1650 },
    { month: 'Feb', shopee: 1700, tokopedia: 1600, average: 1650 },
    { month: 'Mar', shopee: 2100, tokopedia: 1800, average: 1950 },
    { month: 'Apr', shopee: 2200, tokopedia: 2000, average: 2100 },
    { month: 'May', shopee: 2500, tokopedia: 2200, average: 2350 },
    { month: 'Jun', shopee: 2300, tokopedia: 2100, average: 2200 },
    { month: 'Jul', shopee: 2600, tokopedia: 2400, average: 2500 },
    { month: 'Aug', shopee: 2500, tokopedia: 2300, average: 2400 },
    { month: 'Sep', shopee: 2800, tokopedia: 2600, average: 2700 },
    { month: 'Oct', shopee: 3000, tokopedia: 2800, average: 2900 },
    { month: 'Nov', shopee: 3200, tokopedia: 3000, average: 3100 },
    { month: 'Dec', shopee: 3500, tokopedia: 3300, average: 3400 },
];

const gmvComboChartConfig = {
    shopee: { label: 'GMV', color: "hsl(var(--primary))" },
    average: { label: 'Rata-rata', color: 'hsl(var(--success))' },
} satisfies ChartConfig;

const platformStrategyDescriptions = [
    {
        title: "TikTok & Tokopedia",
        subtitle: "Kanal untuk \"Shoppertainment\" & Pembelian Impulsif",
        description: "Kuasai dengan konten video pendek, live streaming, dan tren viral."
    },
    {
        title: "Shopee",
        subtitle: "Raksasa Pasar Massal & Promo Agresif",
        description: "Menangkan dengan perang harga, voucher, gamifikasi, dan iklan internal yang masif."
    },
    {
        title: "Lazada & Blibli",
        subtitle: "Benteng untuk Brand & Audiens Berkualitas",
        description: "Dominasi dengan branding premium, garansi (LazMall), dan layanan superior."
    },
    {
        title: "Social Commerce",
        subtitle: "Kanal untuk Targeting Presisi (Meta & Google Ads)",
        description: "Jangkau audiens spesifik dengan retargeting dan lead generation."
    }
];

export default function MarketInsightsPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="space-y-12 md:space-y-20">
                    <section id="wawasan-pasar" className="space-y-8 scroll-mt-24">
                        <div className="text-center">
                            <h2 className="text-h2 font-semibold">Peta Market E-Commerce 2025</h2>
                            <p className="text-subtitle text-muted-foreground mt-2">Posisikan brand kamu dengan strategi yang tepat dan akurat, berdasarkan dinamika pasar terkini.</p>
                        </div>
                        <Card className="p-6 md:p-8">
                            <CardHeader className="p-0">
                                <CardTitle className="text-h3 font-medium">Proyeksi Gross Merchandise Value (GMV)</CardTitle>
                                <CardDescription>Pasar mulai dewasa, fokus bergeser dari 'bakar uang' ke profitabilitas. Pertumbuhan melambat ke 5% (YoY).</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 mt-4 space-y-4">
                                <p className="text-5xl font-bold text-primary">US$56,5 M</p>
                                <div className="overflow-x-auto">
                                    <div className="h-60 w-full min-w-[600px]">
                                        <ChartContainer config={gmvComboChartConfig} className="h-full w-full">
                                            <ComposedChart data={gmvComboData} barCategoryGap="30%" margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                                                <RechartsTooltip content={<ChartTooltipContent formatter={(value, name) => [`$${value}`, gmvComboChartConfig[name as keyof typeof gmvComboChartConfig]?.label]} />} />
                                                <Bar dataKey="shopee" barSize={20} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                                <Line type="monotone" dataKey="average" stroke="hsl(var(--success))" strokeWidth={2} dot={false} />
                                            </ComposedChart>
                                        </ChartContainer>
                                    </div>
                                </div>
                                <p className="text-caption text-muted-foreground text-center">Visualisasi tren GMV antar platform besar.</p>
                            </CardContent>

                            <Separator className="my-8"/>

                            <CardHeader className="p-0 mt-6">
                                <CardTitle className="text-h3 font-medium">Wawasan Penting Pembeli Digital</CardTitle>
                                <CardDescription>Pola perilaku kunci yang mendorong penjualan.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                                <div className="flex items-start gap-3">
                                     <div className="p-2.5 bg-primary/10 rounded-lg"><Clock className="w-5 h-5 text-primary" /></div>
                                    <div>
                                        <p className="font-semibold text-body">Puncak Belanja</p>
                                        <p className="text-muted-foreground text-sm">Pembelian memuncak di jam 19-21 malam & saat tanggal gajian tiba.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                   <div className="p-2.5 bg-primary/10 rounded-lg"><Sparkles className="w-5 h-5 text-primary" /></div>
                                    <div>
                                        <p className="font-semibold text-body">Pendorong Utama</p>
                                        <p className="text-muted-foreground text-sm">82% pelanggan membeli karena ada promo, diskon, atau gratis ongkir.</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                   <div className="p-2.5 bg-primary/10 rounded-lg"><Percent className="w-5 h-5 text-primary" /></div>
                                    <div>
                                        <p className="font-semibold text-body">Sensitivitas Harga</p>
                                        <p className="text-muted-foreground text-sm">65% audiens aktif membandingkan harga di beberapa toko sebelum checkout.</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                     <div className="p-2.5 bg-primary/10 rounded-lg"><Zap className="w-5 h-5 text-primary" /></div>
                                    <div>
                                        <p className="font-semibold text-body">Pengiriman Cepat</p>
                                        <p className="text-muted-foreground text-sm">55% cenderung membatalkan pesanan jika estimasi pengiriman terlalu lama.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    
                    <section id="pangsa-pasar" className="scroll-mt-24">
                        <Card className="p-6 md:p-8">
                            <CardHeader className="p-0">
                                <CardTitle className="text-h3 font-medium">Peta Kekuasaan E-Commerce (Estimasi Pangsa Pasar GMV 2025)</CardTitle>
                                <CardDescription>Integrasi Tokopedia & TikTok menciptakan duopoli baru yang menantang dominasi Shopee.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 mt-8 space-y-8">
                                <div className="overflow-x-auto">
                                    <div className="w-full h-[300px] min-w-[500px]">
                                        <ChartContainer config={marketShareChartConfig} className="h-full w-full">
                                            <RechartsBarChart data={marketShareData} barCategoryGap="20%" margin={{ bottom: 20 }}>
                                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                                <XAxis 
                                                    dataKey="name" 
                                                    tickLine={false} 
                                                    axisLine={false}
                                                    interval={0}
                                                    dy={10}
                                                    tick={{ textAnchor: 'middle', fontSize: 12, fill: 'hsl(var(--foreground))' }}
                                                />
                                                <YAxis hide />
                                                <RechartsTooltip 
                                                    cursor={{ fill: 'hsl(var(--muted))' }} 
                                                    content={<ChartTooltipContent formatter={(value) => `${value}%`} />}
                                                />
                                                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]}>
                                                 </Bar>
                                            </RechartsBarChart>
                                        </ChartContainer>
                                    </div>
                                </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                                    {platformStrategyDescriptions.map((platform, index) => (
                                        <div key={index}>
                                            <h4 className="font-semibold text-body">{platform.title}</h4>
                                            <p className="text-primary text-sm font-medium">{platform.subtitle}</p>
                                            <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>
            <footer className="text-center text-sm text-muted-foreground mt-20 py-8 border-t">
                <p>Laporan ini disusun berdasarkan analisis dan proyeksi dari data publik. Gunakan petakan.ai sebagai alat bantu strategis.</p>
                <p className="mt-2">© 2025 Dibuat oleh RizkyFadil.</p>
            </footer>
        </>
    );
}
