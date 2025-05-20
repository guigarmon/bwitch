import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <section className="w-full max-w-4xl p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenue dans B*WITCH*</h1>
        <a href="#test" className="inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-semibold">
          Je suis prête
        </a>
      </section>

      <section id="test" className="w-full max-w-xl p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Rejoins la liste des premières initiées</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Ton email..."
              className="px-4 py-2 rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-white text-black px-6 py-2 rounded font-semibold">
              Recevoir l'appel du cercle
            </button>
          </form>
        ) : (
          <p className="text-green-400">✨ Merci. Ton énergie est enregistrée ✨</p>
        )}
      </section>

      <footer className="mt-10 text-sm text-neutral-500">© 2025 B*WITCH* · Tous droits réservés</footer>
    </main>
  );
}
