import styles from './World.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function World(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 200 200"
      xmlSpace="preserve"
      {...props}
    >
      <image
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,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 SUVORK5CYII="
      />
    </svg>
  );
}
