import styles from './Hamburger.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Hamburger(props) {
  return (
    <svg
      fill="#b79289"
      width="1em"
      height="1em"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M16 26h40M16 36h40M16 46h40" />
      </g>
    </svg>
  );
}
