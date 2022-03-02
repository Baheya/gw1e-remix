import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import { Header, headerLinks } from './components/Header';

// import fonts from './styles/fonts.css';
import globalStyles from './styles/shared.css';

export const links = () => [
  ...headerLinks(),
  { rel: 'stylesheet', href: globalStyles },
];

export function meta() {
  return { title: 'New Remix App' };
}

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
        <Link to="/posts">Posts</Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
