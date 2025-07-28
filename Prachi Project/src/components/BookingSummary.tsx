import { Movie, Seat } from '@/types/movie';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Calendar, CreditCard } from 'lucide-react';

interface BookingSummaryProps {
  movie: Movie;
  selectedSeats: Seat[];
  showtime: string;
  onConfirmBooking: () => void;
  onCancel: () => void;
}

export const BookingSummary = ({ 
  movie, 
  selectedSeats, 
  showtime, 
  onConfirmBooking, 
  onCancel 
}: BookingSummaryProps) => {
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const processingFee = 25;
  const finalAmount = totalAmount + processingFee;

  return (
    <Card className="sticky top-4 w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <CreditCard className="w-4 sm:w-5 h-4 sm:h-5 text-cinema-gold" />
          Booking Summary
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
        {/* Movie Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{movie.title}</h3>
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>{showtime}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="line-clamp-1">CinePlex Downtown - Screen 1</span>
            </div>
            <Badge variant="secondary" className="text-xs sm:text-sm">{movie.rating}</Badge>
          </div>
        </div>

        <Separator />

        {/* Selected Seats */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm sm:text-base">Selected Seats</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {selectedSeats.map(seat => (
              <div key={seat.id} className="flex justify-between items-center text-xs sm:text-sm">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Badge variant="outline" className="text-xs px-1 sm:px-2">
                    {seat.id}
                  </Badge>
                  <span className="capitalize">{seat.type}</span>
                </span>
                <span className="font-medium">₹{seat.price}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span>Subtotal ({selectedSeats.length} tickets)</span>
            <span>₹{totalAmount}</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span>Processing Fee</span>
            <span>₹{processingFee}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold text-base sm:text-lg">
            <span>Total</span>
            <span className="text-cinema-gold">₹{finalAmount}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-3 sm:pt-4">
          <Button 
            variant="gold" 
            className="w-full text-sm sm:text-base py-2 sm:py-3"
            onClick={onConfirmBooking}
            disabled={selectedSeats.length === 0}
          >
            Confirm Booking - ₹{finalAmount}
          </Button>
          <Button 
            variant="outline" 
            className="w-full text-sm sm:text-base py-2 sm:py-3"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>

        {/* Notice */}
        <p className="text-xs text-muted-foreground text-center leading-tight">
          By proceeding, you agree to our terms and conditions. 
          Tickets are non-refundable.
        </p>
      </CardContent>
    </Card>
  );
};