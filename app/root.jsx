import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

//TO DO: re-organize headings semantic structure for homepage
//TO DO: set CONSISTENT global media queries
// TO DO: think about whether category icon should be dynamic

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" type="style/css" href="styles/shared.css" />
        <Meta />
        <Links />
      </head>
      <body>
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
