
import Link from 'next/link';

export default function LanguageSelector() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Choisis ta langue / Choose your language / Elige tu idioma</h1>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/fr"><button style={btnStyle}>Français</button></Link>
        <Link href="/en"><button style={btnStyle}>English</button></Link>
        <Link href="/es"><button style={btnStyle}>Español</button></Link>
      </div>
    </div>
  )
}

const btnStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '0.5rem'
};
