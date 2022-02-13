import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import {
  Accordion,
  AccordionItem,
  Badge,
  Banner,
  Button,
  Checkbox,
} from '@components/ui';
import cn from 'classnames';

import styles from './styles/components.module.scss';

const ComponentsPage = () => {
  return (
    <div className="container mx-auto padded">
      <div className={cn(styles.root)}>
        <nav className={cn(styles.sidenav)}>
          <ul>
            <li>
              <a href="#accordion">Accordion</a>
            </li>
            <li>
              <a href="#badge">Badge</a>
            </li>
            <li>
              <a href="#banner">Banner</a>
            </li>
            <li>
              <a href="#button">Button</a>
            </li>
            <li>
              <a href="#checkbox">Checkbox</a>
            </li>
            <li>
              <a href="#map">Map</a>
            </li>
          </ul>
        </nav>
        <article className={cn(styles.components)}>
          <section id="accordion">
            <h4>
              <a href="#accordion">Accordion</a>
            </h4>
            <Accordion>
              <AccordionItem title="Item 1" itemKey={0}>
                <p>
                  Ad aliqua occaecat duis ut anim aute cupidatat ullamco
                  consectetur incididunt eu non id occaecat. Amet reprehenderit
                  exercitation ut nisi.
                </p>
              </AccordionItem>
              <AccordionItem title="Item 2" itemKey={1}>
                <h6>This is an accordion2</h6>
                <p>
                  Ad aliqua occaecat duis ut anim aute cupidatat ullamco
                  consectetur incididunt eu non id occaecat. Amet reprehenderit
                  exercitation ut nisi. Pariatur enim qui aute nostrud ullamco
                  culpa veniam sint officia tempor. Nisi anim anim commodo amet
                  sit irure consequat tempor occaecat nostrud amet veniam
                  cupidatat pariatur. Exercitation ullamco culpa voluptate duis
                  enim ex Lorem consectetur cillum nulla veniam. Lorem ad aliqua
                  irure qui ea nulla exercitation dolor nulla voluptate.
                </p>
                <Button type="button" size="sm">
                  Button
                </Button>
              </AccordionItem>
            </Accordion>
          </section>
          <section id="badge">
            <h4>
              <a href="#badge">Badge</a>
            </h4>
            <div className={cn(styles.wrappedItems)}>
              <Badge>badge</Badge>
              <Badge variant="primary" iconLeft="😂" iconRight="😏">
                primary
              </Badge>
              <Badge variant="secondary" iconRight="🍕">
                secondary
              </Badge>
              <Badge variant="contrasted">contrasted</Badge>
              <Badge variant="danger">danger</Badge>
              <Badge variant="success">ok</Badge>
              <Badge variant="warning">warning</Badge>
              <Badge variant="info">info</Badge>
            </div>
          </section>
          <section id="banner">
            <h4>
              <a href="#banner">Banner</a>
            </h4>
            <div></div>
            <Banner
              title="Please accept this cookie"
              description="Lorem ipsum dolor incididunt aliqua aliqua aliquip velit ut qui deserunt occaecat non culpa. Voluptate id occaecat nostrud ad veniam fugiat labore in ea sint cillum et in aliquip."
              open
              icon="🍪"
              confirmTitle="Accept"
              floating={false}
              relativeTo="parent"
            />
          </section>
          <section id="button">
            <h4>
              <a href="#button">Button</a>
            </h4>
            <div className={styles.wrappedItems}>
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
            <div className={styles.wrappedItems}>
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
            <div className={styles.wrappedItems}>
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
            <div className={styles.wrappedItems}>
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
            <div className={cn(styles.wrappedItems, styles.contrasted)}>
              <Button type="button" variant="transparent">
                Transparent
              </Button>
              <Button type="button" variant="transparent" outlined>
                Transparent
              </Button>
            </div>
            <div className={styles.wrappedItems}>
              <Button type="button" iconLeft={<Chevron />}>
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
            <div className={styles.wrappedItems}>
              <Button type="button" iconLeft={<Chevron />} circular />
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
            <div className={styles.wrappedItems}>
              <Button type="button" stretched>
                W I D E
              </Button>
            </div>
            <div className={styles.wrappedItems}>
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
            <div className={styles.wrappedItems}>
              <Button type="button" iconLeft="🔥" circular size="xs" />
              <Button type="button" iconLeft="🔥" circular size="sm" />
              <Button type="button" iconLeft="🔥" circular size="md" />
              <Button type="button" iconLeft="🔥" circular size="lg" />
              <Button type="button" iconLeft="🔥" circular size="xl" />
            </div>
            <div className={styles.wrappedItems}>
              <Button type="button" iconLeft={<Chevron />} circular size="xs" />
              <Button type="button" iconLeft={<Chevron />} circular size="sm" />
              <Button type="button" iconLeft={<Chevron />} circular size="md" />
              <Button type="button" iconLeft={<Chevron />} circular size="lg" />
              <Button type="button" iconLeft={<Chevron />} circular size="xl" />
            </div>
          </section>
          <section id="checkbox">
            <h4>
              <a href="#checkbox">Checkbox</a>
            </h4>
            <Checkbox label="This is a checkbox with a lot of text" />
            <Checkbox checked label="Checked" />
            <Checkbox disabled checked label="Disabled and checked" />
          </section>
          <section id="map">
            <h4>
              <a href="#map">Map (powered by MapBox)</a>
            </h4>
            {/* <Map /> */}
          </section>
        </article>
      </div>
    </div>
  );
};

export default ComponentsPage;
ComponentsPage.Layout = Layout;
