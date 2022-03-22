import styles from './Close.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Close(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="m17.5 17.5 37 37M54.5 17.5l-37 37" />
      </g>
    </svg>
  );
}
