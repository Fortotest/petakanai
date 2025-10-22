
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                Gua <Link href="https://www.instagram.com/masffadil/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">RizkyFadil</Link> bikin Petakan.ai karena masalah-masalah teknis yang gua alamin sendiri pas mau mulai jualan. Modal udah ada, tapi di kepala gua isinya cuma pertanyaan:
              </p>
              <blockquote className="space-y-3 rounded-xl bg-muted/50 text-foreground/80">
                <p>"Harga jual gua 100ribu, HPP-nya 50ribu. Tapi apa itu udah nutup biaya admin marketplace, biaya packaging, sama payment fee? Jangan-jangan untung bersih gua cuma 10 ribu bahkan minus?."</p>
                <p>"Gua ada budget iklan 3 juta. Eh, tapi gua baru inget, ada PPN 11% buat iklan yang harus gua bayar di atasnya. Jadi total 'bakar uang' gua bukan 3 juta, tapi 3,33 juta. Gimana cara ngitung balik modalnya kalo biayanya nambah terus?"</p>
              </blockquote>
              <p>
                Gua takut modal dan waktu kebuang percuma cuma karena salah hitung di detail or perintilan kecil. Keresahan-keresahan itu yang jadi Petakan.ai tercipta. dan Petakan.ai ini bukan alat yang rumit. Sangat mudah untuk memberi kamu jawaban pasti atas pertanyaan-pertanyaan tadi, sebelum kamu buang modal, waktu, sepeser pun.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-h3 flex items-center gap-2">
                Di Petakan.ai, kamu bisa langsung:
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-3">
              <ul className="space-y-4 text-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span>
                    <strong className="block text-foreground">Validasi Harga Jual</strong>
                    <span className="text-muted-foreground">Biar tau untung bersih real setelah HPP, biaya admin, packaging, dll.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span>
                    <strong className="block text-foreground">Hitung Budget Iklan (Termasuk Pajak!)</strong>
                    <span className="text-muted-foreground">Biar tau budget 3 juta + PPN 11% itu harus jadi berapa penjualan biar gak rugi.</span>
                  </span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span>
                    <strong className="block text-foreground">Temukan BEP (Balik Modal)</strong>
                    <span className="text-muted-foreground">Biar tau harus jual berapa unit buat nutupin semua biaya kamu.</span>
                  </span>
                </li>
                 <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/>
                  <span>
                    <strong className="block text-foreground">Dapat Wawasan & Rekomendasi AI</strong>
                    <span className="text-muted-foreground">Berdasarkan data kamu, AI kasih insight pasar Indo & strategi yang bisa langsung kamu pratekin.</span>
                  </span>
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
        <p className="mt-2">© 2025 Dibuat oleh <Link href="https://www.instagram.com/masffadil/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">RizkyFadil</Link>.</p>
      </footer>
    </>
  );
}
