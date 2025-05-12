// lib/fonts.ts
import localFont from 'next/font/local';

export const SanDeMore = localFont({
    src: [
        {
            path: '../public/fonts/SanDeMoreDemo-Regular.woff2', // Preferred
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/SanDeMoreDemo-Regular.woff', // Fallback
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
});