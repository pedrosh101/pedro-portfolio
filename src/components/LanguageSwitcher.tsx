'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const toggleLocale = () => {
    const nextLocale = localeActive === 'en' ? 'pt' : 'en';
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="bg-transparent border-none cursor-pointer text-lg text-clr1 font-medium"
    >
      {localeActive === 'en' ? 'EN/PT' : 'PT/EN'}
    </button>
  );
}
