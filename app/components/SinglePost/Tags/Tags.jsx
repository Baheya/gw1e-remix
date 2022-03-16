import { Tag } from './Tag';
import styles from './Tags.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag.id}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
}
