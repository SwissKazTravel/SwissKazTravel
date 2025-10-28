import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SwissKaz Travel</title>
        <meta name="description" content="Discover Kazakhstan with us 🇨🇭🇰🇿" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 text-center">
        <h1 className="text-4xl font-bold mb-4">Willkommen bei SwissKaz Travel</h1>
        <p className="text-lg mb-6">Von den Schweizer Alpen bis in die kasachische Steppe 🇨🇭🇰🇿</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Reisen entdecken</button>
      </main>
    </>
  )
}
