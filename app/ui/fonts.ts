import { Inter, Roboto_Mono as RobotoMonoFont, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const robotoMono = RobotoMonoFont({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});