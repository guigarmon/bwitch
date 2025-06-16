import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import i18n from '../bw-i18n-locales/lib/i18n'

export default function Home() {
  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    if (!locale) return
    if (locale === 'fr') router.push('/fr')
    else if (locale === 'es') router.push('/es')
    else router.push('/en')
  }, [locale])

  return (
    <>
      <Head>
        <title>B*WITCH*</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">B*WITCH*</h1>
        <p className="mt-4">Redirection basée sur ta langue...</p>
      </main>
    </>
  )
}
