import styles from './Item.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Item({ item }) {
  return (
    <li className={item?.icon ? 'author-list-item icon' : 'author-list-item'}>
      {item?.icon && item['icon']}
      {item.content}
    </li>
  );
}
