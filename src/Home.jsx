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
        <img src="/Lista.png" alt="On se connaît déjà ?" className="rounded-2xl shadow-lg w-full mb-6" />
        <a href="#test" className="inline-block bg-white text-black px-6 py-3 rounded-full text-lg font-semibold">
          Je suis prête
        </a>
      </section>

      <section className="w-full max-w-3xl p-4 text-center">
        <img src="/el camino.png" alt="Changer mon chemin" className="rounded-2xl shadow-lg w-full mb-6" />
        <a href="#test" className="inline-block border border-white px-6 py-3 rounded-full text-lg">
          → Je veux changer mon chemin
        </a>
      </section>

      <section className="w-full max-w-2xl p-6 text-center">
        <img src="/bowl.png" alt="Cercle des Initiées" className="rounded-xl w-full mb-4" />
        <p className="text-lg italic">Bol rituel artisanal (niveau supérieur)<br/>Fait à la main, rien que pour toi</p>
      </section>

      <section className="w-full max-w-2xl p-6 text-center">
        <img src="/Journal.png" alt="Journal Magique" className="rounded-xl w-full mb-4" />
        <p className="text-lg">Trace tes émotions sur la toile de ton âme.</p>
      </section>

      <section className="w-full max-w-2xl p-6 text-center space-y-10">
        <img src="/pouppé cassé.png" alt="Poupée cassée" className="rounded-xl w-full" />
        <img src="/Feu sauvage.png" alt="Feu sauvage" className="rounded-xl w-full" />
        <img src="/Sombra final.png" alt="Sombra Final" className="rounded-xl w-full" />
        <img src="/Cendre sacrée.png" alt="Cendre Sacrée" className="rounded-xl w-full" />
        <img src="/Jeu3.png" alt="Ronde 2 – Sombra" className="rounded-xl w-full" />
        <img src="/lookaturself.png" alt="Look at yourself" className="rounded-xl w-full" />
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
