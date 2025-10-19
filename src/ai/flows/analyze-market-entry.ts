
'use server';

/**
 * @fileOverview An AI agent that evaluates market entry potential for e-commerce sellers.
 *
 * - analyzeMarketEntry - A function that analyzes market entry potential.
 */
import { ai } from '@/ai/genkit';
import { 
    AnalyzeMarketEntryInputSchema, 
    AnalyzeMarketEntryOutputSchema,
    type AnalyzeMarketEntryInput,
    type AnalyzeMarketEntryOutput
} from './types';


const analyzeMarketEntryPrompt = ai.definePrompt({
  name: 'analyzeMarketEntryPrompt',
  input: { schema: AnalyzeMarketEntryInputSchema },
  output: { schema: AnalyzeMarketEntryOutputSchema },
  model: 'googleai/gemini-pro',
  prompt: `Kamu adalah seorang Business Analyst AI yang ahli di pasar e-commerce Indonesia. Gaya bicaramu santai, to the point, dan mudah dimengerti UMKM.

Tugasmu adalah memberikan evaluasi cepat dan tajam terhadap sebuah ide bisnis berdasarkan data berikut:

Nama Produk: {{{productName}}}
Target Pasar: {{{targetSegment}}}
Ringkasan Finansial: {{{financialForecastSummary}}}
Kondisi Pasar Umum: {{{marketConditionSummary}}}

**Analisis & Respon:**
1.  **Baca Ringkasan Finansial**: Lihat apakah hasilnya untung atau rugi. Perhatikan ROAS dan BEP.
2.  **Berikan \`evaluation\`**: 
    -   Jika untung & ROAS bagus (>2.5x), berikan kalimat positif dan kuat. Contoh: "Strategi kamu terlihat sehat!", "Ini ide yang menjanjikan, bro!".
    -   Jika rugi atau ROAS rendah (<1.5x) atau BEP tidak tercapai, berikan kalimat yang menunjukkan risiko. Contoh: "Wah, strategi kamu masih berisiko.", "Waduh, ini perlu dihitung ulang.".
3.  **Berikan \`keyConsiderations\`**: Lanjutkan dengan 1-2 kalimat penjelasan singkat. Fokus pada **SATU** poin paling krusial.
    -   Jika untung: Sebutkan apa yang membuatnya bagus. Contoh: "ROAS di atas 3x menunjukkan efisiensi iklan yang baik."
    -   Jika rugi: Sebutkan penyebab utamanya. Contoh: "Penyebab utamanya adalah BEP yang lebih tinggi dari target penjualan, artinya biaya belum tertutup." atau "ROAS yang rendah jadi sinyal strategi pemasaran belum efektif."

**PENTING**:
-   Gunakan HANYA informasi dari data di atas. Jangan berasumsi.
-   Buat seolah-olah kamu sedang memberi nasihat cepat ke teman bisnismu.
-   Hasilkan output dalam format JSON yang sesuai dengan skema.
`
});

const analyzeMarketEntryFlow = ai.defineFlow(
  {
    name: 'analyzeMarketEntryFlow',
    inputSchema: AnalyzeMarketEntryInputSchema,
    outputSchema: AnalyzeMarketEntryOutputSchema,
  },
  async (input) => {
    const response = await analyzeMarketEntryPrompt(input);
    const output = response.output;
    if (!output) {
      throw new Error('AI did not return the expected analysis output.');
    }
    return output;
  }
);


export async function analyzeMarketEntry(input: AnalyzeMarketEntryInput): Promise<AnalyzeMarketEntryOutput> {
  return analyzeMarketEntryFlow(input);
}
