import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from 'remix';
import { Footer, footerLinks } from './components/Footer';
import { Header, headerLinks } from './components/Header';

// import fonts from './styles/fonts.css';
import globalStyles from './styles/shared.css';

export const links = () => [
  ...headerLinks(),
  ...footerLinks(),
  { rel: 'stylesheet', href: globalStyles },
];

export function meta() {
  return { title: 'GW1E' };
}

export default function App() {
  const matches = useMatches();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" type="style/css" href="styles/shared.css" />
        <Meta />
        <Links />
      </head>
      <body
        className={`${
          matches?.[1]?.id === 'routes/post/$slug'
            ? 'secondary-bg'
            : 'primary-bg'
        }`}
      >
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
