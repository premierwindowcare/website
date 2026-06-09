import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premier Window Care | Contact',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
}

export default function DoorhangerRedirect() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2CG28PL968"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var redirected = false;
              function redirect() {
                if (redirected) return;
                redirected = true;
                window.location.replace('/#contact');
              }

              window.dataLayer = window.dataLayer || [];
              window.gtag = function () { window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', 'G-2CG28PL968');

              window.setTimeout(redirect, 250);
            })();
          `,
        }}
      />

      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/#contact" />
        </noscript>
        <div>
          <h1 className="text-2xl font-semibold text-slate-950">
            Taking you to Premier Window Care
          </h1>
          <p className="mt-3 text-slate-600">
            Redirecting to the contact form...
          </p>
          <a
            className="mt-6 inline-flex text-sm font-medium text-blue-700 underline underline-offset-4"
            href="/#contact"
          >
            Continue to contact
          </a>
        </div>
      </main>
    </>
  )
}
