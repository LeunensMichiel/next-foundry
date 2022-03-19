import { Fieldset, LanguagePicker, Layout } from '@components/common';
import { AtSign, Calendar, Chevron } from '@components/icons';
import {
  Accordion,
  AccordionItem,
  Badge,
  Banner,
  Button,
  Checkbox,
  Dropdown,
  ImageWithAspectRatio,
  Input,
  MapboxMap,
  RadioButton,
  Select,
  Spinner,
  Switch,
  TextArea,
  Tooltip,
} from '@components/ui';
import { useUI } from '@lib/hooks';
import cn from 'classnames';
import { toast } from 'react-toastify';

import { ArticleSkeleton } from '../components/ui/Skeleton';
import testImg from '../public/assets/test.jpg';
import styles from './styles/components.module.scss';

const ComponentsPage = () => {
  const { openModal } = useUI();

  return (
    <div className="container">
      <div className={cn(styles.root)}>
        <nav className={cn(styles.sidenav)}>
          <ul>
            <li>
              <a href="#languagepicker">Language picker</a>
            </li>
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
              <a href="#dropdown">Dropdown</a>
            </li>
            <li>
              <a href="#imageWithAspectRatio">Image (aspect ratio)</a>
            </li>
            <li>
              <a href="#inputs">Input fields</a>
            </li>
            <li>
              <a href="#map">Map</a>
            </li>
            <li>
              <a href="#modal">Modal</a>
            </li>
            <li>
              <a href="#radiobutton">Radiobutton</a>
            </li>
            <li>
              <a href="#select">Select</a>
            </li>
            <li>
              <a href="#skeleton">Skeleton</a>
            </li>
            <li>
              <a href="#spinner">Spinner</a>
            </li>
            <li>
              <a href="#switch">Switch</a>
            </li>
            <li>
              <a href="#textarea">Textarea</a>
            </li>
            <li>
              <a href="#tooltip">Tooltip</a>
            </li>
            <li>
              <a href="#toast">Toast</a>
            </li>
          </ul>
        </nav>
        <article className={cn(styles.components)}>
          <section id="languagepicker" className={styles['mw-capped']}>
            <h4>
              <a href="#languagepicker">Language picker</a>
            </h4>
            <div className={styles.wrappedItems}>
              <LanguagePicker />
            </div>
          </section>
          <section id="accordion">
            <h4>
              <a href="#accordion">Accordion</a>
            </h4>
            <Accordion grouped>
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
              <Button type="button">Neutral</Button>
              <Button type="button" variant="primary">
                Primary
              </Button>
              <Button type="button" variant="secondary">
                Secondary
              </Button>
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
              <Button type="button" outlined>
                Neutral
              </Button>
              <Button type="button" variant="primary" outlined>
                Primary
              </Button>
              <Button type="button" variant="secondary" outlined>
                Secondary
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
              <Button type="button" disabled>
                Neutral
              </Button>
              <Button type="button" variant="primary" disabled>
                Primary
              </Button>
              <Button type="button" variant="secondary" disabled>
                Secondary
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
              <Button type="button" outlined disabled>
                Neutral
              </Button>
              <Button type="button" variant="primary" outlined disabled>
                Primary
              </Button>
              <Button type="button" variant="secondary" outlined disabled>
                Secondary
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
              <Button type="button" variant="minimal">
                Minimal
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
              <Button type="button" iconLeft="🔥" squared size="xs" />
              <Button type="button" iconLeft="🔥" squared size="sm" />
              <Button type="button" iconLeft="🔥" squared size="md" />
              <Button type="button" iconLeft="🔥" squared size="lg" />
              <Button type="button" iconLeft="🔥" squared size="xl" />
            </div>
            <div className={styles.wrappedItems}>
              <Button type="button" iconLeft={<Chevron />} circular size="xs" />
              <Button type="button" iconLeft={<Chevron />} circular size="sm" />
              <Button type="button" iconLeft={<Chevron />} circular size="md" />
              <Button type="button" iconLeft={<Chevron />} circular size="lg" />
              <Button type="button" iconLeft={<Chevron />} circular size="xl" />
              <Button type="button" iconLeft={<Chevron />} squared size="xs" />
              <Button type="button" iconLeft={<Chevron />} squared size="sm" />
              <Button type="button" iconLeft={<Chevron />} squared size="md" />
              <Button type="button" iconLeft={<Chevron />} squared size="lg" />
              <Button type="button" iconLeft={<Chevron />} squared size="xl" />
            </div>
          </section>
          <section id="checkbox">
            <h4>
              <a href="#checkbox">Checkbox</a>
            </h4>
            <Checkbox label="This is a checkbox with a lot of text" />
            <Checkbox checked label="Checked" readOnly />
            <Checkbox disabled checked label="Disabled and checked" readOnly />
          </section>
          <section id="dropdown" className={styles['mw-capped']}>
            <h4>
              <a href="#dropdown">Dropdown</a>
            </h4>
            <Dropdown label="Dropdown">
              <p>Lorem</p>
              <Badge>A banana 🍌</Badge>
              <p>Ipsum</p>
              <Dropdown label="Nested dropdown">
                <p>Lorem</p>
                <Dropdown label="Deeply dropdown">
                  <p>Lorem</p>
                  <p>Ipsum</p>
                </Dropdown>
              </Dropdown>
              <p>Doloret</p>
            </Dropdown>
          </section>
          <section id="imageWithAspectRatio">
            <h4>
              <a href="#imageWithAspectRatio">Image (with aspect ratio)</a>
            </h4>
            <ImageWithAspectRatio
              src={testImg}
              aspectRatio="3/1"
              placeholder="blur"
              objectFit="cover"
              objectPosition="50% 60%"
              alt="mountains"
              priority
            />
          </section>
          <section id="inputs" className={styles['mw-capped']}>
            <h4>
              <a href="#inputs">Input fields</a>
            </h4>
            <Input
              label="Email field"
              placeholder="john@foo.com"
              iconLeft={<AtSign />}
              type="email"
            />
            <Input
              label="Date selector"
              iconLeft={<Calendar />}
              type="date"
              iconRight={<Chevron />}
            />
            <Input
              label="Number field"
              type="number"
              iconLeft={'#️⃣'}
              placeholder="Step by .01"
              useRestrictedNumberPattern
              step="0.01"
            />
            <Input
              label="Test Password"
              type="password"
              iconRight={<Chevron />}
              iconLeft={'🔑'}
              placeholder="Enter a password"
              error={{ message: 'This is a fixed error', type: 'required' }}
            />
          </section>
          <section id="map">
            <h4>
              <a href="#map">Map (powered by MapBox)</a>
            </h4>
            <MapboxMap />
          </section>
          <section id="modal">
            <h4>
              <a href="#modal">Modal</a>
            </h4>
            <div className={styles.wrappedItems}>
              <Button type="button" onClick={() => openModal()} size="sm">
                Toggle Modal
              </Button>
            </div>
          </section>
          <section id="radiobutton" className={styles['mw-capped']}>
            <h4>
              <a href="#radiobutton">Radiobutton</a>
            </h4>
            <Fieldset label="Some radios in a fieldset">
              <RadioButton label="Value 1" value="1" name="radio" />
              <RadioButton label="Value 2" value="2" name="radio" />
              <RadioButton label="Value 3" value="3" name="radio" />
              <RadioButton label="Value 4" value="4" name="radio" />
            </Fieldset>
          </section>
          <section id="select" className={styles['mw-capped']}>
            <h4>
              <a href="#select">Select</a>
            </h4>
            <Select
              instanceId="select"
              label="Select"
              placeholder="Set to multi for multiselect"
              options={[
                {
                  label: 'Group 1',
                  options: [
                    { value: 'id2', label: 'This is a banana: \u{1F34C}' },
                    { value: 'id3', label: 'Hold up \u{1F171}' },
                  ],
                },
                {
                  label: 'Group 2',
                  options: [
                    { value: 'id4', label: 'This is a banana: \u{1F34C}' },
                    { value: 'id5', label: 'Hold up \u{1F171}' },
                  ],
                },
              ]}
            />
          </section>
          <section id="skeleton">
            <h4>
              <a href="#skeleton">Skeleton</a>
            </h4>
            <ArticleSkeleton uniqueKey="test-loader" />
          </section>
          <section id="spinner">
            <h4>
              <a href="#spinner">Spinner</a>
            </h4>
            <Spinner size="xl" />
            <Spinner size="lg" />
            <Spinner size="md" />
            <Spinner size="sm" />
            <Spinner size="xs" />
          </section>
          <section id="switch" className={styles['mw-capped']}>
            <h4>
              <a href="#switch">Switch</a>
            </h4>
            <Fieldset label="Some switches in a fieldset">
              <Switch label="Test" labelOn="💡" labelOff="🌙" />
              <Switch label="disabled" disabled />
            </Fieldset>
            <Fieldset
              label="Fieldset with error"
              error={{ type: 'required', message: 'This is an error' }}
            >
              <Switch label="Default checked" checked readOnly />
            </Fieldset>
          </section>
          <section id="textarea" className={styles['mw-capped']}>
            <h4>
              <a href="#textarea">Textarea</a>
            </h4>
            <TextArea
              label="Message"
              placeholder="Enter a message"
              error={{ type: 'required', message: 'This is an error' }}
            />
          </section>
          <section id="tooltip" className={styles['mw-capped']}>
            <h4>
              <a href="#tooltip">Tooltip</a>
            </h4>
            <Tooltip text="Cool eh?">
              <p>Hover over this text!</p>
            </Tooltip>
          </section>
          <section id="toast">
            <h4>
              <a href="#toast">Toast</a>
            </h4>
            <div className={cn(styles.wrappedItems)}>
              <Button
                type="button"
                onClick={() => toast("Don't forget to ⭐ on Github!")}
                size="xs"
              >
                🍞 Default
              </Button>
              <Button
                type="button"
                onClick={() => toast.dark("Don't forget to ⭐ on Github!")}
                size="xs"
                variant="secondary"
              >
                🍞 Inverted
              </Button>
              <Button
                type="button"
                onClick={() => toast.error("Don't forget to ⭐ on Github!")}
                size="xs"
                variant="danger"
              >
                🍞 Error
              </Button>
              <Button
                type="button"
                onClick={() => toast.warn("Don't forget to ⭐ on Github!")}
                size="xs"
                variant="warning"
              >
                🍞 Warn
              </Button>
              <Button
                type="button"
                onClick={() => toast.success("Don't forget to ⭐ on Github!")}
                size="xs"
                variant="success"
              >
                🍞 Success
              </Button>
              <Button
                type="button"
                onClick={() => toast.info("Don't forget to ⭐ on Github!")}
                size="xs"
                variant="info"
              >
                🍞 Info
              </Button>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ComponentsPage;
ComponentsPage.Layout = Layout;
