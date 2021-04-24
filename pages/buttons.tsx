import { Layout } from '@components/common';
import { Chevron, Moon, Sun } from '@components/icons';
import { Button } from '@components/ui';
import styles from '@styles/pages/buttons.module.scss';

const Page2 = () => (
  <div className="container-lg mx-auto padded">
    <h1>Buttons</h1>
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
        <Button type="button" variant="primary">
          Primary
        </Button>
        <Button type="button" variant="secondary">
          Secondary
        </Button>
        <Button type="button">Neutral</Button>
        <Button type="button" variant="success">
          Success
        </Button>
        <Button type="button" variant="warning">
          Warning
        </Button>
        <Button type="button" variant="danger">
          Danger
        </Button>
        <Button type="button" variant="info">
          Info
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" variant="primary" outlined>
          Primary
        </Button>
        <Button type="button" variant="secondary" outlined>
          Secondary
        </Button>
        <Button type="button" outlined>
          Neutral
        </Button>
        <Button type="button" variant="success" outlined>
          Success
        </Button>
        <Button type="button" variant="warning" outlined>
          Warning
        </Button>
        <Button type="button" variant="danger" outlined>
          Danger
        </Button>
        <Button type="button" variant="info" outlined>
          Info
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" variant="primary" disabled>
          Primary
        </Button>
        <Button type="button" variant="secondary" disabled>
          Secondary
        </Button>
        <Button type="button" disabled>
          Neutral
        </Button>
        <Button type="button" variant="success" disabled>
          Success
        </Button>
        <Button type="button" variant="warning" disabled>
          Warning
        </Button>
        <Button type="button" variant="danger" disabled>
          Danger
        </Button>
        <Button type="button" variant="info" disabled>
          Info
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" variant="primary" outlined disabled>
          Primary
        </Button>
        <Button type="button" variant="secondary" outlined disabled>
          Secondary
        </Button>
        <Button type="button" outlined disabled>
          Neutral
        </Button>
        <Button type="button" variant="success" outlined disabled>
          Success
        </Button>
        <Button type="button" variant="warning" outlined disabled>
          Warning
        </Button>
        <Button type="button" variant="danger" outlined disabled>
          Danger
        </Button>
        <Button type="button" variant="info" outlined disabled>
          Info
        </Button>
      </div>
      <div className={`${styles.buttonRow} ${styles.dark}`}>
        <Button type="button" variant="transparent">
          Transparent
        </Button>
        <Button type="button" variant="transparent" outlined>
          Transparent
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" iconLeft={<Moon />}>
          Icon Left
        </Button>
        <Button type="button" iconRight={<Chevron />}>
          Icon Right
        </Button>
        <Button type="button">🔥</Button>
        <Button type="button" iconLeft="🔥">
          Emoji
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" iconLeft={<Sun />} circular />
        <Button type="button" circular>
          Rounded
        </Button>
        <Button type="button" uppercased>
          uppercased
        </Button>
        <Button
          as="a"
          href="https://leunesmedia.com"
          target="_blank"
          rel="noreferrer"
        >
          As Link
        </Button>
        <Button type="button" disabled>
          Disabled
        </Button>
        <Button type="button" loading>
          Loading
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" stretched>
          W I D E
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" size="xs">
          XSmall
        </Button>
        <Button type="button" size="sm">
          Small
        </Button>
        <Button type="button" size="md">
          Medium
        </Button>
        <Button type="button" size="lg">
          Large
        </Button>
        <Button type="button" size="xl">
          Extra Large
        </Button>
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" iconLeft="🔥" circular size="xs" />
        <Button type="button" iconLeft="🔥" circular size="sm" />
        <Button type="button" iconLeft="🔥" circular size="md" />
        <Button type="button" iconLeft="🔥" circular size="lg" />
        <Button type="button" iconLeft="🔥" circular size="xl" />
      </div>
      <div className={styles.buttonRow}>
        <Button type="button" iconLeft={<Moon />} circular size="xs" />
        <Button type="button" iconLeft={<Moon />} circular size="sm" />
        <Button type="button" iconLeft={<Moon />} circular size="md" />
        <Button type="button" iconLeft={<Moon />} circular size="lg" />
        <Button type="button" iconLeft={<Moon />} circular size="xl" />
      </div>
    </div>
  </div>
);

export default Page2;

Page2.Layout = Layout;
