'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { createContext } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: ReactNode | unknown;
}

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark"
      disableTransitionOnChange
      {...props}
    >
      {children}
      
      {/* Global Matrix theme styling */}
      <style jsx global>{`
        /* Matrix theme specific global styles */
        body.dark {
          background-color: #000000;
          color: #00FF41;
          font-family: 'Courier New', monospace;
        }

        body.light {
          background-color: #0f0f0f;
          color: #ff0000;
          font-family: 'Courier New', monospace;
        }
        
        /* Cursor styling for terminal feel */
        body.dark ::selection {
          background-color: rgba(0, 255, 65, 0.3);
          color: #ffffff;
        }
        
        body.light ::selection {
          background-color: rgba(255, 0, 0, 0.3);
          color: #ffffff;
        }
      `}</style>
    </NextThemesProvider>
  );
} 