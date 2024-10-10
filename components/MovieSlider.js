"use client";

import { useEffect, useRef } from 'react';

export default function MovieSlider({ movies }) {
  const sliderRef = useRef(null);  // Référence pour le slider

  useEffect(() => {
    const slider = sliderRef.current;

    // Fonction de défilement automatique
    const scrollSlider = () => {
      if (slider) {
        slider.scrollBy({
          left: slider.offsetWidth,  // Défiler par la largeur d'un écran
          behavior: 'smooth',  // Défilement fluide
        });

        // Si le slider a atteint la fin, revenir au début
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({
            left: 0,  // Retourner au début du slider
            behavior: 'smooth',
          });
        }
      }
    };

    // Défilement automatique toutes les 3 secondes
    const interval = setInterval(scrollSlider, 3000);

    return () => clearInterval(interval);  // Nettoyage de l'intervalle
  }, []);

  if (!movies || movies.length === 0) {
    return <p className="text-white">Aucun film trouvé.</p>;
  }

  return (
    <div className="overflow-hidden w-full">
      <div ref={sliderRef} className="flex gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[300px] flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <h3 className="text-white text-lg mt-2">{movie.title}</h3>
            <p className="text-gray-400">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
