
/**
 * @fileoverview This file initializes the Genkit AI platform. It should be imported
 * ONLY once at the root of the application.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'zod';

// Logic to select the API key. Use GEMINI_API_KEY if available, otherwise fallback to GOOGLE_API_KEY.
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY or GOOGLE_API_KEY environment variable.");
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey,
      apiVersion: "v1", // Force stable API version to avoid 404 on gemini-pro
    }),
  ],
});

export {z};
