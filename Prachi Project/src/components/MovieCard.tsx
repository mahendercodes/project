import { Movie } from '@/types/movie';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  return (
    <Card className="group overflow-hidden relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 border border-gray-600/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl hover:shadow-cinema-gold/30 transition-all duration-500 hover:scale-105 hover:rotate-1 w-full max-w-sm mx-auto">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-gold/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110"
        />
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating rating badge */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 transform transition-all duration-300 group-hover:scale-110">
          <Badge variant="secondary" className="bg-gradient-to-r from-cinema-gold via-yellow-400 to-cinema-gold text-black font-bold shadow-lg px-2 sm:px-3 py-1 text-xs sm:text-sm">
            ⭐ {movie.rating}
          </Badge>
        </div>
        
        {/* Genre badge */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 transform transition-all duration-300 group-hover:scale-110">
          <Badge variant="outline" className="bg-black/70 border-cinema-gold/50 text-cinema-gold backdrop-blur-sm text-xs sm:text-sm">
            {movie.genre}
          </Badge>
        </div>
        
        {/* Hover overlay with play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-cinema-gold/90 rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <span className="text-black text-xl sm:text-2xl">▶️</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-5 lg:p-6 relative z-10">
        <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white group-hover:from-cinema-gold group-hover:via-yellow-300 group-hover:to-cinema-gold transition-all duration-300 line-clamp-2">
          {movie.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{movie.description}</p>
        
        <div className="flex items-center gap-4 sm:gap-6 text-sm mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-300 group-hover:text-cinema-gold transition-colors duration-300">
            <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="font-medium text-xs sm:text-sm">{movie.duration} min</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-gray-300 group-hover:text-cinema-gold transition-colors duration-300">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-current text-cinema-gold" />
            <span className="font-medium text-xs sm:text-sm">Premium</span>
          </div>
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-cinema-gold">🕐 Showtimes Today:</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {movie.showtimes.slice(0, 3).map((time) => (
              <Badge 
                key={time} 
                variant="outline" 
                className="text-xs bg-gradient-to-r from-gray-700/50 to-gray-600/50 border-cinema-gold/30 text-gray-200 hover:border-cinema-gold/60 hover:text-cinema-gold transition-all duration-300 px-2 sm:px-3 py-1"
              >
                {time}
              </Badge>
            ))}
            {movie.showtimes.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 text-purple-300 px-2 sm:px-3 py-1">
                +{movie.showtimes.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-5 lg:p-6 pt-0 relative z-10">
        <Button 
          onClick={() => onSelect(movie)} 
          className="w-full bg-gradient-to-r from-cinema-gold via-yellow-400 to-cinema-gold text-black font-bold py-2 sm:py-3 hover:from-yellow-400 hover:via-cinema-gold hover:to-yellow-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cinema-gold/50 active:scale-95 group-hover:animate-pulse text-sm sm:text-base"
        >
          <span className="flex items-center justify-center gap-2">
            🎫 Book Tickets
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};