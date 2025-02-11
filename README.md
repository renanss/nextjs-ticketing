# Next.js Ticketing App

A ticket booking application that allows users to select seats and make reservations. Try the live demo at [https://nextjs-ticketing.vercel.app/](https://nextjs-ticketing.vercel.app/).

## Features

- Interactive seat selection
- Random seat allocation
- Price calculation and checkout
- Theme toggle with persistence
- Responsive design

## Code Architecture

The project follows a component-first architecture with clear separation of concerns:

1. **Component Organization**
   - Each component lives in its own directory with related files
   - Components are split into `index.tsx` for logic and `styles.ts` for styling
   - Clear separation between presentational and container components

2. **Performance Optimizations**
   - Strategic use of `useMemo` for expensive calculations
   - `useCallback` for stable function references
   - Props drilling minimized through proper component composition
   - Proper interleaving of Server and Client Components

3. **State Management**
   - Centralized state management with custom hooks
   - Theme persistence using server-side caching
   - Efficient state updates with React's state management

4. **Server/Client Component Pattern**
   - Following Next.js 13+ patterns for Server/Client Components
   - Server Components used when possible for better performance
   - Client Components marked explicitly with 'use client'
   - Proper component composition to optimize bundle size

## Project Structure

```
├── app/
│   ├── api/
│   │   └── theme/
│   └── ticketing/
├── components/
│   ├── Phone/
│   │   ├── Checkout/
│   │   ├── Details/
│   │   ├── Header/
│   │   ├── Legend/
│   │   ├── Seat/
│   │   └── Theater/
│   └── shared/
│       └── Icon/
├── hooks/
├── lib/
├── providers/
└── public/
    └── assets/
```

## Getting Started

First, install the dependencies and run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Requirements

1. **Seat Selection**
   - Random seat selection via + button
   - Manual seat selection by clicking
   - Seat deselection functionality
   - Selected seats counter

2. **Booking Details**
   - Display selected seat numbers and prices
   - Interactive seat unselection from details
   - Total price calculation
   - Checkout functionality

3. **Theme Customization**
   - Light/Dark mode toggle
   - Theme persistence across sessions

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)

## Performance Considerations

1. **Component Optimization**
   - Components are memoized when beneficial
   - Event handlers are stabilized with useCallback
   - Heavy calculations are cached with useMemo
   - Props are kept minimal to prevent unnecessary re-renders

2. **Server/Client Split**
   - Static content rendered on server for faster FCP
   - Interactive elements properly marked as client components
   - Proper interleaving of server and client components
   - Following Next.js best practices for component composition

3. **State Management**
   - Centralized state with hooks for better maintainability
   - Minimal prop drilling through proper component structure
   - Efficient updates using React's state management
   - Theme persistence with server-side caching

## Learn More

- [Server/Client Component Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns) - learn about Next.js component composition.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Theme Persistence Implementation

The current implementation uses a simple in-memory cache with IP-based identification:

1. **Memory Cache Strategy**
   - Server-side in-memory Map storage
   - IP address as unique identifier
   - 30-day expiration for cached values
   - Works across regular and incognito browser sessions

2. **Implementation Details**
   ```typescript
   // Simplified cache structure
   const memoryCache = new Map<string, {
     value: string,    // theme preference
     timestamp: number // for expiration
   }>();
   ```

3. **Limitations**
   - Cache clears on server restarts
   - Shared IPs (corporate networks, NAT) will share same theme
   - Mobile users with dynamic IPs may see inconsistent themes
   - Not suitable for high-availability deployments

4. **Future Improvements**
   For a more robust production solution, consider:
   - Redis for persistent cross-server caching
   - Database storage with user authentication
   - Cookie-based storage for simpler deployments
   - Local storage with system preference fallback

The current implementation provides a lightweight solution suitable for development and small deployments, balancing simplicity with reasonable cross-session persistence.
