
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl px-4 pt-12 pb-6">
        <div className="space-y-8">
          <div className="my-8">
              <Image 
                src="https://raw.githubusercontent.com/Fortotest/Market.ai/87fd35bb95da94bd9a80e34a80b08498639b5eb7/202510211340.gif"
                alt="Petakan.ai demo"
                width={1200}
                height={630}
                className="mx-auto rounded-xl"
                unoptimized
                priority
              />
          </div>

          <Card>
            <CardContent className="space-y-4 text-body text-muted-foreground pt-6">
              <p>
                Gua (RizkyFadil) bikin Petakan.ai karena masalah-masalah teknis yang gua alamin sendiri pas mau mulai jualan. Modal udah ada, tapi di kepala gua isinya cuma pertanyaan:
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/80 space-y-2">
                <p>"Harga jual gua Rp 100.000, HPP-nya Rp 50.000. Tapi apa itu udah nutup biaya admin marketplace, biaya packaging, sama payment fee? Jangan-jangan untung bersih gua cuma 10 ribu perak."</p>
                <p>"Gua ada budget iklan 3 juta. Eh, tapi gua baru inget, ada PPN 11% buat iklan yang harus gua bayar di atasnya. Jadi total 'bakar uang' gua bukan 3 juta, tapi 3,33 juta. Gimana cara ngitung balik modalnya kalo biayanya nambah terus?"</p>
              </blockquote>
              <p>
                Gua takut modal kebuang percuma cuma karena salah itung di detail-detail kecil kayak gitu. Keresahan-keresahan itu yang jadi Petakan.ai. Ini bukan alat yang rumit. Ini simulator simpel buat ngasih lo jawaban pasti atas pertanyaan-pertanyaan tadi, sebelum lo buang modal sepeser pun.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-h3 flex items-center gap-2">
                Di Petakan.ai, lo bisa langsung:
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-3">
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span><strong className="text-foreground">Validasi Harga Jual Lo</strong> (Biar tau untung bersih real setelah HPP, biaya admin, packaging, dll.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span><strong className="text-foreground">Hitung Budget Iklan (Termasuk Pajak!)</strong> (Biar tau budget 3 juta + PPN 11% itu harus jadi berapa penjualan biar gak rugi.)</span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span><strong className="text-foreground">Temukan BEP (Balik Modal) Lo</strong> (Biar tau harus jual berapa unit buat nutupin semua biaya lo.)</span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span><strong className="text-foreground">Dapat Wawasan & Rekomendasi AI</strong> (Berdasarkan data lo, AI kasih insight pasar Indo & strategi yang bisa langsung lo pratekin.)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center pt-4">
            <h2 className="text-h2 font-semibold tracking-tight">Petakan Sebelum Jalan.</h2>
          </div>
        </div>
      </main>
      <footer className="text-center text-sm text-muted-foreground mt-4 mb-8 container max-w-3xl px-4">
        <p>Laporan ini disusun berdasarkan analisis dan proyeksi dari data publik. Gunakan petakan.ai sebagai alat bantu strategis.</p>
        <p className="mt-2">© 2025 Dibuat oleh RizkyFadil.</p>
      </footer>
    </>
  );
}
