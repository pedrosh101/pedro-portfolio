import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='bg-red-100 min-h-screen justify-center items-center flex flex-col text-3xl'>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <LanguageSwitcher />
    </div>
  );
}