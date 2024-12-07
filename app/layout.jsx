import localFont from 'next/font/local';
import './globals.css';
import { Roboto } from 'next/font/google';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',git 
	weight: '100 900',
});

export const metadata = {
	title: 'Books App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
