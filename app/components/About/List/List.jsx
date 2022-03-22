import { Item, itemLinks } from './Item';

import styles from './List.css';

export function links() {
  return [...itemLinks(), { rel: 'stylesheet', href: styles }];
}

export function List({ type, items }) {
  return (
    <ul className={type === 'flex' ? 'author-list flex' : 'author-list'}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}
