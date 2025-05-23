// src/ai/flows/generate-bio.ts
'use server';
/**
 * @fileOverview Bio generation AI agent.
 *
 * - generateBio - A function that handles the bio generation process.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'A comma separated list of keywords describing the person, their interests, and their skills.'
    ),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('A short biography.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {schema: GenerateBioInputSchema},
  output: {schema: GenerateBioOutputSchema},
  prompt: `You are a creative bio writer. Create a short and engaging bio using the following keywords: {{{keywords}}}. Keep it under 150 words.`,
});

const generateBioFlow = ai.defineFlow(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
