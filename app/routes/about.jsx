import { Living } from '~/components/Icons/Living';
import { Unicorn } from '~/components/Icons/Unicorn';
import { Mobile } from '~/components/Icons/Mobile';
import { Utensils } from '~/components/Icons/Utensils';
import { WavyLineMobile } from '../components/Icons/WavyLineMobile';
import { WavyLineLong } from '../components/Icons/WavyLineLong';
import { WavyLineShort } from '../components/Icons/WavyLineShort';
import { World } from '~/components/Icons/World';
import arabicLogo from '../../public/images/arabic_logo.png';

import styles from '~/styles/about.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function About() {
  return (
    <main>
      <div className="about-container">
        <h1 className="visually-hidden">About Me</h1>
        <section className="author-introduction">
          <div className="author-image" />
          <p>
            Girlwithoneearring started out as an Instagram page where I would
            share my musings and feelings with my friends, sort of like an
            online diary. I was trying to find that special mix of globalized
            citizen/third culture kid to commiserate with ele bifakaro w yektebo
            in vielen Sprachen. This page is attempt to take that initiative and
            multiply it in the hopes of finding other girlwithoneearrings.
          </p>
          <div className="author-interests">
            <h2>Read me if you are a </h2>
            <ul>
              <li>
                <Living />
                Sun chaser
              </li>
              <li>
                <Unicorn />
                Fantasy Lover
              </li>
              <li>
                <Mobile />
                90s groover
              </li>
              <li>
                <Utensils />
                Gourmet taster
              </li>
              <li>
                <World />
                Always on the mover
              </li>
            </ul>
          </div>
        </section>
        <WavyLineMobile className="wavy-line-mobile" />
        <section className="author-facts">
          <span className="title-container">
            <h2>Some lesser known facts about the author:</h2>
            <span className="decoration-container">
              <WavyLineShort />
            </span>
          </span>
          <ul>
            <li>
              I spent much of the early 2000s reading Harry Potter fanfiction
              online.
            </li>
            <li>
              Spotify has described me as one of the only people that go from
              Trap queen to New Americana (and that’s how I roll).
            </li>
            <li>If I could be any animal, I’d be a dolphin.</li>
            <li>I am an Aquarius.</li>
          </ul>
        </section>
        <WavyLineLong className="wavy-line-long" />
        <WavyLineMobile className="wavy-line-mobile" />
        <section>
          <h2>Paying it backwards and forwards:</h2>
          <p>
            There are very few places I will get the chance to thank you, so I
            will start by doing so here. Thank you for reading this, thank you
            for participating, thank you for being you. Please know that I am
            always grateful for your input.{' '}
          </p>
        </section>
        <p>Your humble servant,</p>
        <img className="arabic-signature" src={arabicLogo} alt="" />
        <p className="author-signature">Girl With One Earring</p>
      </div>
    </main>
  );
}
