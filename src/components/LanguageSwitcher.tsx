"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { BR, GB } from "country-flag-icons/react/3x2";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const toggleLocale = () => {
    const nextLocale = localeActive === "en" ? "pt" : "en";

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex justify-end w-fit bg-transparent border-none cursor-pointer text-xl tracking-wider lg:mr-16 mr-4 text-black font-medium font-imfell gap-2"
    >
      {localeActive === "en" ? (
        <>
          <p>Português</p>
          <BR title="United States" className="w-5" />
        </>
      ) : (
        <>
          <p>English</p>
          <GB title="United States" className="w-5" />
        </>
      )}
    </button>
  );
}
