import { useState } from 'react';
import { movies, theaters } from '@/data/movies';
import { Movie, Seat } from '@/types/movie';
import { MovieCard } from '@/components/MovieCard';
import { SeatMap } from '@/components/SeatMap';
import { BookingSummary } from '@/components/BookingSummary';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Film, Ticket } from 'lucide-react';
import heroImage from '@/assets/hero-cinema.jpg';
import { Footer } from '@/components/Footer';

type BookingStep = 'movies' | 'showtimes' | 'seats' | 'confirmation';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('movies');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedShowtime, setSelectedShowtime] = useState<string>('');
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const { toast } = useToast();

  const theater = theaters[0]; // Using first theater for demo
  const screen = theater.screens[0]; // Using first screen for demo

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentStep('showtimes');
  };

  const handleShowtimeSelect = (showtime: string) => {
    setSelectedShowtime(showtime);
    setCurrentStep('seats');
  };

  const handleSeatSelect = (seat: Seat) => {
    if (seat.status === 'occupied') return;

    setSelectedSeats(prev => {
      const isSelected = prev.some(s => s.id === seat.id);
      if (isSelected) {
        return prev.filter(s => s.id !== seat.id);
      } else {
        if (prev.length >= 6) {
          toast({
            title: "Maximum seats reached",
            description: "You can select up to 6 seats per booking.",
            variant: "destructive"
          });
          return prev;
        }
        return [...prev, { ...seat, status: 'selected' }];
      }
    });
  };

  const handleConfirmBooking = () => {
    toast({
      title: "Booking Confirmed! 🎬",
      description: `Your tickets for ${selectedMovie?.title} have been booked successfully.`,
    });
    setCurrentStep('confirmation');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'showtimes':
        setCurrentStep('movies');
        setSelectedMovie(null);
        break;
      case 'seats':
        setCurrentStep('showtimes');
        setSelectedShowtime('');
        setSelectedSeats([]);
        break;
      case 'confirmation':
        setCurrentStep('movies');
        setSelectedMovie(null);
        setSelectedShowtime('');
        setSelectedSeats([]);
        break;
    }
  };

  const handleStartOver = () => {
    setCurrentStep('movies');
    setSelectedMovie(null);
    setSelectedShowtime('');
    setSelectedSeats([]);
  };

  const scrollToMovies = () => {
    const moviesSection = document.getElementById('movies-section');
    if (moviesSection) {
      moviesSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      {currentStep === 'movies' && (
        <div className="relative h-screen overflow-hidden">
          <img
            src={heroImage}
            alt="Cinema Experience"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cinema-gold/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
          
          {/* Constant background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cinema-gold/5 via-transparent to-purple-600/5" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 relative z-10 px-4 sm:px-6 lg:px-8">
              {/* Enhanced title with constant glow effect */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl">
                  🎬 GrabASeat
                </h1>
                <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cinema-gold/30 blur-2xl">
                  🎬 GrabASeat
                </div>
              </div>
              
              {/* Enhanced subtitle with premium background */}
              <div className="inline-block px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-cinema-gold/20 to-yellow-500/20 border border-cinema-gold/30 rounded-full backdrop-blur-sm mx-auto max-w-4xl">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-yellow-300 to-cinema-gold leading-relaxed font-semibold">
                  Book your favorite movies with the best seats in town
                </p>
              </div>
              
              {/* New feature badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
                <div className="px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cinema-gold/20 to-yellow-500/20 border border-cinema-gold/30 rounded-full backdrop-blur-sm">
                  <span className="text-cinema-gold font-semibold text-sm sm:text-base">✨ Premium Experience</span>
                </div>
                <button 
                  onClick={scrollToMovies}
                  className="px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30 hover:border-purple-400/50 active:scale-95 cursor-pointer"
                >
                  <span className="text-purple-300 font-semibold text-sm sm:text-base">🎫 Instant Booking</span>
                </button>
                <div className="px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                  <span className="text-green-300 font-semibold text-sm sm:text-base">💯 Best Prices</span>
                </div>
              </div>
              
              {/* Call to action button */}
              <div className="mt-8 sm:mt-12">
                <button 
                  onClick={scrollToMovies}
                  className="group relative px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold text-black bg-gradient-to-r from-cinema-gold via-yellow-400 to-cinema-gold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cinema-gold/50 active:scale-95"
                >
                  <span className="relative z-10">Explore Movies</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-cinema-gold to-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      {currentStep !== 'movies' && (
        <div className="border-b border-gray-700/50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md sticky top-0 z-50 shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="hover:bg-cinema-gold/20 hover:text-cinema-gold transition-all duration-300 border border-cinema-gold/30 hover:border-cinema-gold/50 text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <div className="flex flex-wrap items-center gap-2">
                <Film className="w-4 sm:w-5 h-4 sm:h-5 text-cinema-gold" />
                <span className="font-medium text-white text-sm sm:text-base">{selectedMovie?.title}</span>
                {selectedShowtime && (
                  <>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <Badge variant="outline" className="border-cinema-gold/50 text-cinema-gold bg-cinema-gold/10 text-xs sm:text-sm">
                      {selectedShowtime}
                    </Badge>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Movie Selection */}
        {currentStep === 'movies' && (
          <div id="movies-section" className="space-y-12">
            <div className="text-center space-y-4">
              {/* Premium background for "Now Showing" title */}
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-cinema-gold/20 to-yellow-500/20 border border-cinema-gold/30 rounded-full backdrop-blur-sm mx-auto">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-yellow-300 to-cinema-gold">
                  Now Showing
                </h2>
              </div>
              {/* Premium background for subtitle */}
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-gray-500/30 rounded-full backdrop-blur-sm mx-auto">
                <p className="text-xl text-gray-300">Choose your movie for tonight</p>
              </div>
              
              {/* Enhanced section divider */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-32"></div>
                <span className="text-cinema-gold text-2xl">🎬</span>
                <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-32"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {movies.map((movie) => (
                <div key={movie.id} className="transform transition-all duration-300 hover:scale-105">
                  <MovieCard
                    movie={movie}
                    onSelect={handleMovieSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Showtime Selection */}
        {currentStep === 'showtimes' && selectedMovie && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              {/* Premium background for "Select Showtime" title */}
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-cinema-gold/20 to-yellow-500/20 border border-cinema-gold/30 rounded-full backdrop-blur-sm mx-auto">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-yellow-300 to-cinema-gold">
                  Select Showtime
                </h2>
              </div>
              {/* Premium background for subtitle */}
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-gray-500/30 rounded-full backdrop-blur-sm mx-auto">
                <p className="text-xl text-gray-300">Available showtimes for today</p>
              </div>
              
              {/* Enhanced section divider */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-32"></div>
                <span className="text-cinema-gold text-2xl">🕐</span>
                <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-32"></div>
              </div>
            </div>

            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 border-gray-600/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                  {selectedMovie.showtimes.map((showtime) => (
                    <Button
                      key={showtime}
                      variant="outline"
                      className="h-12 sm:h-14 lg:h-16 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-gray-700/50 to-gray-600/50 border-cinema-gold/30 text-white hover:bg-gradient-to-r hover:from-cinema-gold/20 hover:to-yellow-500/20 hover:border-cinema-gold/60 hover:text-cinema-gold transform transition-all duration-300 hover:scale-105 active:scale-95"
                      onClick={() => handleShowtimeSelect(showtime)}
                    >
                      <div className="text-center">
                        <div className="text-sm sm:text-lg lg:text-xl">{showtime}</div>
                        <div className="text-xs opacity-70">Available</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Seat Selection */}
        {currentStep === 'seats' && selectedMovie && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              <div className="text-center space-y-4">
                {/* Premium background for "Select Your Seats" title */}
                <div className="inline-block px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-cinema-gold/20 to-yellow-500/20 border border-cinema-gold/30 rounded-full backdrop-blur-sm mx-auto">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-yellow-300 to-cinema-gold">
                    Select Your Seats
                  </h2>
                </div>
                {/* Premium background for subtitle */}
                <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-gray-500/30 rounded-full backdrop-blur-sm mx-auto">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                    Choose your preferred seats • <span className="text-cinema-gold font-semibold">{selectedSeats.length}</span> selected
                  </p>
                </div>
                
                {/* Enhanced section divider */}
                <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-16 sm:w-32"></div>
                  <span className="text-cinema-gold text-xl sm:text-2xl">🪑</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent w-16 sm:w-32"></div>
                </div>
              </div>

              <Card className="p-3 sm:p-4 lg:p-6">
                <SeatMap
                  seatLayout={screen.seatLayout}
                  selectedSeats={selectedSeats}
                  onSeatSelect={handleSeatSelect}
                />
              </Card>
            </div>

            <div className="xl:order-last">
              <BookingSummary
                movie={selectedMovie}
                selectedSeats={selectedSeats}
                showtime={selectedShowtime}
                onConfirmBooking={handleConfirmBooking}
                onCancel={handleBack}
              />
            </div>
          </div>
        )}

        {/* Confirmation */}
        {currentStep === 'confirmation' && selectedMovie && (
          <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 px-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-cinema-gold rounded-full flex items-center justify-center mx-auto">
                <Ticket className="w-8 sm:w-10 h-8 sm:h-10 text-primary-foreground" />
              </div>
              {/* Premium background for "Booking Confirmed!" title */}
              <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full backdrop-blur-sm mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400">Booking Confirmed!</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base px-4">
                Your tickets have been successfully booked. Check your email for the confirmation details.
              </p>
            </div>

            <Card className="p-4 sm:p-6 text-left">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-base sm:text-lg">Booking Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Movie:</span>
                    <span className="font-medium text-right">{selectedMovie.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Showtime:</span>
                    <span className="font-medium">{selectedShowtime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seats:</span>
                    <span className="font-medium text-right">
                      {selectedSeats.map(seat => seat.id).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Theater:</span>
                    <span className="font-medium text-right">{theater.name}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Button variant="cinema" onClick={handleStartOver} className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base">
              Book Another Movie
            </Button>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;