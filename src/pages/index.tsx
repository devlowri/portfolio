import Head from "next/head";
import HeroSection from "@/sections/blog/hero";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Laura Jacas - Portfolio</title>
        <meta name="description" content="Developer by Laura Jacas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
