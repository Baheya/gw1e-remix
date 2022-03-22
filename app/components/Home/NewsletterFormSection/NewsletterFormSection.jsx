import { Button, buttonLinks } from '../../shared/Button';
import { Form, useActionData } from 'remix';
import { Input, inputLinks } from './Input';

import styles from './NewsletterFormSection.css';

export function links() {
  return [
    ...buttonLinks(),
    ...inputLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function NewsletterFormSection() {
  return (
    <section className="newsletter-form-section">
      <h2>
        <span>Sign Up</span>
      </h2>
      <p>
        Subscribe to the email list to get new posts directly to your inbox.
      </p>
      <Form method="post" action="/category/all" reloadDocument>
        <Input label="First Name" name="name" />
        <Input label="Email" name="email" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
