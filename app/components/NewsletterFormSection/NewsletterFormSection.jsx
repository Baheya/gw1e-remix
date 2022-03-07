import { Form, useActionData } from 'remix';
import { Button, buttonLinks } from '../Button';

import styles from './NewsletterFormSection.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function NewsletterFormSection() {
  const actionData = useActionData();
  return (
    <section className="newsletter-form_section">
      <h2>
        <span>Sign Up</span>
      </h2>
      <p>
        Subscribe to the email list to get new posts directly to your inbox.
      </p>
      <Form method="post" action="/posts" reloadDocument>
        <div className="input-field">
          <label htmlFor="name">First Name</label>
          <input name="name" type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
