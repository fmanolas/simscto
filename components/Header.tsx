import { Orbitron } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 w-full ${orbitron.className}`}
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        color: "#00ffb2",
      }}
    >
      <h1 className="text-2xl font-bold">SIMS CTO</h1>
      <nav className="flex space-x-10 text-lg">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/Whitepaper" className="hover:underline">
          Whitepaper
        </Link>
        <Link href="https://t.me/simsmemechannel" className="hover:underline">
          Gallery
        </Link>
        <Link
          href="https://the-sims-cto-website.vercel.app/"
          className="hover:underline"
        >
          Meme Generator
        </Link>

        <div className="flex space-x-4 items-center">
          <a
            href="https://t.me/SIMSCTOSOL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tg.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="hover:opacity-75 transition duration-300"
            />
          </a>
          <a
            href="https://dexscreener.com/solana/hvytm3jqktrsmsbfwhtvptizygiyndegvvmpasyt89b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/dexscreener.svg"
              alt="Dexscreener"
              width={24}
              height={24}
              className="hover:opacity-75 transition duration-300"
            />
          </a>
          <a
            href="https://solscan.io/token/HgJN8j5QsbSKnwkthWAbEawPkXR1vB2TrAFiujV4pump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/solscan.svg"
              alt="Solscan"
              width={24}
              height={24}
              className="hover:opacity-75 transition duration-300"
            />
          </a>
          <a
            href="https://x.com/simscoin?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/x.png"
              alt="X (Twitter)"
              width={24}
              height={24}
              className="hover:opacity-75 transition duration-300"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
