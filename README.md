# Next.js Ticketing App

A ticket booking application that allows users to select seats and make reservations. Try the live demo at [https://nextjs-ticketing.vercel.app/](https://nextjs-ticketing.vercel.app/).

## Features

- Interactive seat selection
- Random seat allocation
- Price calculation and checkout
- Theme toggle with persistence
- Responsive design

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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
