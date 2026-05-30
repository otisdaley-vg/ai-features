import type { APIRoute } from 'astro';
import { generateOpenGraphImage } from 'astro-og-canvas';

export const GET: APIRoute = async () => {
  const body = await generateOpenGraphImage({
    title: 'AI Features',
    description: 'A weekly issue on what AI is actually shipping.',
    bgGradient: [
      [10, 10, 12],
      [23, 23, 30],
    ],
    border: { color: [16, 185, 129], width: 8, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: [250, 250, 250],
        weight: 'SemiBold',
        size: 80,
      },
      description: {
        color: [163, 163, 163],
        weight: 'Normal',
        size: 32,
      },
    },
  });
  return new Response(body, { headers: { 'Content-Type': 'image/png' } });
};
