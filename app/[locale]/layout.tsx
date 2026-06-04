import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import ChatBot from '@/components/ui/ChatBot';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ThemeProvider>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <ChatBot />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
