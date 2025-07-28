import { Movie, Theater } from '@/types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'RRR',
    genre: 'Action/Drama',
    duration: 187,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjMUExQTFBIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMUExQTFBIj4KPHA+UlJSPC9wPgo8L3N2Zz4KPHN2ZyB4PSI2MCIgeT0iMzAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB4PSIwIiB5PSIwIj4KPHR5cGUgZmlsbD0iIzAwMCIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5BY3Rpb24gRHJhbWE8L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'A fictitious story about two legendary revolutionaries and their journey away from home.',
    showtimes: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM']
  },
  {
    id: '2',
    title: 'Pushpa: The Rise',
    genre: 'Action/Crime',
    duration: 179,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjOEIzNTEzIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI0MCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+UHVzaHBhPC9wPgo8L3N2Zz4KPHN2ZyB4PSI2MCIgeT0iMzAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB4PSIwIiB5PSIwIj4KPHR5cGUgZmlsbD0iI0ZGRiIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5BY3Rpb24gQ3JpbWU8L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'A laborer named Pushpa rises through the ranks of a red sandalwood smuggling syndicate.',
    showtimes: ['9:30 AM', '12:45 PM', '4:15 PM', '7:45 PM', '11:00 PM']
  },
  {
    id: '3',
    title: 'KGF Chapter 2',
    genre: 'Action/Period',
    duration: 168,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjNDc0NzQ3Ii8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI2MCIgeT0iMTMwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+S0dGIDI8L3A+Cjwvc3ZnPgo8c3ZnIHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDAiPgo8c3ZnIHg9IjAiIHk9IjAiPgo8dHlwZSBmaWxsPSIjRkZGIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPkFjdGlvbiBQZXJpb2Q8L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky.',
    showtimes: ['11:00 AM', '2:30 PM', '6:00 PM', '9:30 PM']
  },
  {
    id: '4',
    title: 'Baahubali 2: The Conclusion',
    genre: 'Action/Drama',
    duration: 167,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjQjEzNTI1Ii8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI0MCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+QmFhaHViYWxpIDI8L3A+Cjwvc3ZnPgo8c3ZnIHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDAiPgo8c3ZnIHg9IjAiIHk9IjAiPgo8dHlwZSBmaWxsPSIjRkZGIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPkFjdGlvbiBEcmFtYTwvdHlwZT4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4=',
    description: 'Shiva learns about his heritage and the conflict between his family and the evil Bhallaladeva.',
    showtimes: ['10:30 AM', '2:00 PM', '5:30 PM', '9:00 PM']
  },
  {
    id: '5',
    title: 'Arjun Reddy',
    genre: 'Romance/Drama',
    duration: 182,
    rating: 'A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjMkYyRjJGIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI0MCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+QXJqdW4gUmVkZHk8L3A+Cjwvc3ZnPgo8c3ZnIHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDAiPgo8c3ZnIHg9IjAiIHk9IjAiPgo8dHlwZSBmaWxsPSIjRkZGIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPlJvbWFuY2UgRHJhbWE8L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'A short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.',
    showtimes: ['2:00 PM', '5:30 PM', '9:00 PM']
  },
  {
    id: '6',
    title: 'Ala Vaikunthapurramuloo',
    genre: 'Family/Action',
    duration: 165,
    rating: 'U',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjMDA0Nzg4Ii8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSIzMCIgeT0iMTMwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+QWxhIFZhaWt1bnRoYXB1cnJhbXVsb288L3A+Cjwvc3ZnPgo8c3ZnIHg9IjYwIiB5PSIzMDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDAiPgo8c3ZnIHg9IjAiIHk9IjAiPgo8dHlwZSBmaWxsPSIjRkZGIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPkZhbWlseSBBY3Rpb248L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'A young man tries to reconnect with his father while romancing the daughter of a business rival.',
    showtimes: ['11:30 AM', '3:00 PM', '6:30 PM', '10:00 PM']
  },
  {
    id: '7',
    title: 'Salaar',
    genre: 'Action/Thriller',
    duration: 175,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjMUIxQjFCIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI3MCIgeT0iMTMwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+U2FsYWFyPC9wPgo8L3N2Zz4KPHN2ZyB4PSI2MCIgeT0iMzAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB4PSIwIiB5PSIwIj4KPHR5cGUgZmlsbD0iI0ZGRiIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5BY3Rpb24gVGhyaWxsZXI8L3R5cGU+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+',
    description: 'The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes.',
    showtimes: ['12:00 PM', '3:30 PM', '7:00 PM', '10:30 PM']
  },
  {
    id: '8',
    title: 'Bheemla Nayak',
    genre: 'Action/Drama',
    duration: 148,
    rating: 'U/A',
    poster: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjQxNCIgdmlld0JveD0iMCAwIDI4MCA0MTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iNDE0IiBmaWxsPSIjMzE2NzFBIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjIwNyIgcj0iNjAiIGZpbGw9IiNENEFGMzciLz4KPHN2ZyB4PSI0MCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGIj4KPHA+QmhlZW1sYSBOYXlhazwvcD4KPC9zdmc+CjxzdmcgeD0iNjAiIHk9IjMwMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0MCI+CjxzdmcgeD0iMCIgeT0iMCI+Cjx0eXBlIGZpbGw9IiNGRkYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+QWN0aW9uIERyYW1hPC90eXBlPgo8L3N2Zz4KPC9zdmc+Cjwvc3ZnPg==',
    description: 'A clash between a police officer and a retired army havildar brings unexpected consequences.',
    showtimes: ['1:00 PM', '4:30 PM', '8:00 PM']
  }
];

export const theaters: Theater[] = [
  {
    id: '1',
    name: 'PVR Cinemas',
    location: 'Forum Mall, Kukatpally, Hyderabad',
    screens: [
      {
        id: 'screen1',
        name: 'Screen 1 - IMAX',
        capacity: 150,
        seatLayout: [
          {
            row: 'A',
            seats: Array.from({ length: 10 }, (_, i) => ({
              id: `A${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 250
            }))
          },
          {
            row: 'B',
            seats: Array.from({ length: 12 }, (_, i) => ({
              id: `B${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 250
            }))
          },
          {
            row: 'C',
            seats: Array.from({ length: 14 }, (_, i) => ({
              id: `C${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 350
            }))
          },
          {
            row: 'D',
            seats: Array.from({ length: 14 }, (_, i) => ({
              id: `D${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 350
            }))
          },
          {
            row: 'E',
            seats: Array.from({ length: 8 }, (_, i) => ({
              id: `E${i + 1}`,
              number: `${i + 1}`,
              type: 'vip' as const,
              status: Math.random() > 0.5 ? 'occupied' : 'available' as const,
              price: 500
            }))
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'INOX Multiplex',
    location: 'GVK One Mall, Banjara Hills, Hyderabad',
    screens: [
      {
        id: 'screen2',
        name: 'Screen 2 - Dolby Atmos',
        capacity: 180,
        seatLayout: [
          {
            row: 'A',
            seats: Array.from({ length: 12 }, (_, i) => ({
              id: `A${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 200
            }))
          },
          {
            row: 'B',
            seats: Array.from({ length: 14 }, (_, i) => ({
              id: `B${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 200
            }))
          },
          {
            row: 'C',
            seats: Array.from({ length: 16 }, (_, i) => ({
              id: `C${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 300
            }))
          },
          {
            row: 'D',
            seats: Array.from({ length: 16 }, (_, i) => ({
              id: `D${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 300
            }))
          },
          {
            row: 'E',
            seats: Array.from({ length: 10 }, (_, i) => ({
              id: `E${i + 1}`,
              number: `${i + 1}`,
              type: 'vip' as const,
              status: Math.random() > 0.5 ? 'occupied' : 'available' as const,
              price: 450
            }))
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Cinepolis',
    location: 'Mantra Mall, Attapur, Hyderabad',
    screens: [
      {
        id: 'screen3',
        name: 'Screen 3 - 4DX',
        capacity: 120,
        seatLayout: [
          {
            row: 'A',
            seats: Array.from({ length: 8 }, (_, i) => ({
              id: `A${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 180
            }))
          },
          {
            row: 'B',
            seats: Array.from({ length: 10 }, (_, i) => ({
              id: `B${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 180
            }))
          },
          {
            row: 'C',
            seats: Array.from({ length: 12 }, (_, i) => ({
              id: `C${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 280
            }))
          },
          {
            row: 'D',
            seats: Array.from({ length: 12 }, (_, i) => ({
              id: `D${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 280
            }))
          },
          {
            row: 'E',
            seats: Array.from({ length: 6 }, (_, i) => ({
              id: `E${i + 1}`,
              number: `${i + 1}`,
              type: 'vip' as const,
              status: Math.random() > 0.5 ? 'occupied' : 'available' as const,
              price: 400
            }))
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'AMB Cinemas',
    location: 'Gachibowli, Hyderabad',
    screens: [
      {
        id: 'screen4',
        name: 'Screen 4 - Luxury',
        capacity: 100,
        seatLayout: [
          {
            row: 'A',
            seats: Array.from({ length: 6 }, (_, i) => ({
              id: `A${i + 1}`,
              number: `${i + 1}`,
              type: 'regular' as const,
              status: Math.random() > 0.7 ? 'occupied' : 'available' as const,
              price: 220
            }))
          },
          {
            row: 'B',
            seats: Array.from({ length: 8 }, (_, i) => ({
              id: `B${i + 1}`,
              number: `${i + 1}`,
              type: 'premium' as const,
              status: Math.random() > 0.6 ? 'occupied' : 'available' as const,
              price: 320
            }))
          },
          {
            row: 'C',
            seats: Array.from({ length: 8 }, (_, i) => ({
              id: `C${i + 1}`,
              number: `${i + 1}`,
              type: 'vip' as const,
              status: Math.random() > 0.5 ? 'occupied' : 'available' as const,
              price: 480
            }))
          }
        ]
      }
    ]
  }
];