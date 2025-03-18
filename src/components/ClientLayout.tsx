'use client';

import { ReactNode, useEffect, useState } from 'react';
import I18nProvider from './I18nProvider';
import { ThemeProvider } from './ui/ThemeProvider';
import ChatbotButton from './ui/ChatbotButton';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // Use state to ensure hydration completes before rendering client components
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render children immediately to reduce layout shift
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nProvider>
      <ThemeProvider>
        {children}
        <ChatbotButton />
      </ThemeProvider>
    </I18nProvider>
  );
} 