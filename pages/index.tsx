import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>B*WITCH*</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Bienvenue dans B*WITCH*</h1>
        <p className="mt-4">Version de base multilingue a completer.</p>
      </main>
    </>
  );
}
