'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize i18n on the client side only
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  // During SSR or initial mount, render a minimal version
  if (!mounted) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider; 