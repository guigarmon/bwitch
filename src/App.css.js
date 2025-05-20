import React from "react";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo con la imagen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={process.env.PUBLIC_URL + "/BWinicio.png"}
          alt="Fondo bwitch"
          className="w-screen h-screen object-contain object-bottom opacity-95"
          draggable="false"
        />
      </div>

      {/* Botones superiores */}
      <header className="w-full flex justify-end pt-6 pr-10 absolute top-0 left-0 z-20">
        <div className="flex gap-4">
          <button
            className="px-6 py-2 rounded-full border-2 border-bwitch-gold bg-[rgba(38,18,60,0.7)] text-bwitch-text hover:bg-bwitch-gold hover:text-bwitch-bg transition font-semibold shadow"
            onClick={() => window.location.href="#faire-le-test"}
          >
            Faire le Test
          </button>
          <button
            className="px-6 py-2 rounded-full border-2 border-bwitch-gold bg-[rgba(38,18,60,0.7)] text-bwitch-text hover:bg-bwitch-gold hover:text-bwitch-bg transition font-semibold shadow"
            onClick={() => window.location.href="#plus-info"}
          >
            + Info
          </button>
        </div>
      </header>

      {/* Botón inferior */}
      <main className="relative z-10 w-full h-full flex">
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[7vh] flex flex-col items-center w-full pointer-events-none">
          <button
            className="pointer-events-auto px-8 py-3 rounded-full border-2 border-bwitch-gold bg-[rgba(38,18,60,0.7)] text-bwitch-gold hover:bg-bwitch-gold hover:text-bwitch-bg font-semibold shadow-lg transition text-lg"
            onClick={() => window.location.href="#on-se-connait"}
          >
            on se connait déjà ?
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;