'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const toggleLocale = () => {
    const nextLocale = localeActive === 'en' ? 'pt' : 'en';
    
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="bg-transparent border-none cursor-pointer text-xl tracking-wider text-clr1 font-medium font-imfell"
    >
      {localeActive === 'en' ? 'en/pt' : 'pt/en'}
    </button>
  );
}