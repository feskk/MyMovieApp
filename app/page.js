"use client"; // Indique que ce composant est un Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Importation du composant Link
import SearchBar from '../components/SearchBar';
import MovieSlider from '../components/MovieSlider'; // Import du slider

export default function Home() {
  const [movies, setMovies] = useState([]); // Films initiaux (vide par défaut)
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fonction pour récupérer les films populaires dès le chargement de la page
  const fetchPopularMovies = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR&page=1`
    );
    const data = await res.json();

    if (data && data.results) {
      setMovies(data.results); // Met à jour les films populaires
    } else {
      console.error("Erreur lors de la récupération des films populaires", data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPopularMovies(); // Appelle la fonction dès que la page est chargée
  }, []); // Le tableau vide [] signifie que ça s'exécute une seule fois au chargement de la page

  // Fonction pour chercher des films
  const searchMovies = async (query) => {
    setLoading(true);
    setIsSearching(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=fr-FR&page=1`
    );
    const data = await res.json();

    if (data && data.results) {
      setMovies(data.results); // Mettre à jour les films avec les résultats de recherche
    } else {
      console.error("Aucun film trouvé ou problème avec la recherche", data);
    }

    setLoading(false);
  };

  // Fonction de gestion du clic sur le logo
  const handleLogoClick = () => {
    setIsSearching(false); // Réinitialiser l'état de recherche
    fetchPopularMovies(); // Appeler la fonction pour récupérer les films populaires à chaque clic sur le logo
  };

  return (
    <div className="bg-black min-h-screen">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <Link href="/" onClick={handleLogoClick}> {/* Redirection vers la page d'accueil */}
            <img src="/logo.png" alt="MyMovieApp Logo" className="h-16 w-auto object-contain cursor-pointer" />
          </Link>
        </div>
        <SearchBar onSearch={searchMovies} /> {/* Appel de la fonction de recherche */}
      </header>

      <main className="p-8">
        <h1 className="text-white text-4xl mb-8">
          {isSearching ? 'Résultats de recherche' : 'Films populaires'}
        </h1>

        {/* Slider des films populaires ou résultats de recherche */}
        {loading ? (
          <p className="text-white">Chargement des films...</p>
        ) : (
          <MovieSlider movies={movies} />
        )}
      </main>
    </div>
  );
}
