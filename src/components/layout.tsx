import Navbar from './navbar';
import Footer from './footer';
import { Poppins } from '@next/font/google';
import { Box } from '@mui/material';
import Header from './header';
import Head from 'next/head';

// If loading a variable font, you don't need to specify the font weight
const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Layout({ children }: any) {
  return (
    <Box>
      <Head>
        <title>Easy1 managerment </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={PoppinsFont.className}>{children}</main>
      <Footer />
    </Box>
  );
}
