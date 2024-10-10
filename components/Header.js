import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black">
      <div className="flex items-center space-x-4">
        <Link href="/"> {/* Redirection vers la page d'accueil */}
          <img src="/logo.png" alt="MyMovieApp Logo" className="h-16 w-auto object-contain cursor-pointer" />
        </Link>
        <span className="text-white text-2xl font-bold">MyMovieApp</span>
      </div>
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:underline">Accueil</Link></li>
          <li><Link href="/films" className="text-white hover:underline">Films</Link></li>
          <li><Link href="/about" className="text-white hover:underline">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}
