import {
  Anchor,
  Container,
  Title,
  Text,
  Group,
  NavLink,
  Divider,
  Badge,
  Image,
  Accordion,
} from '@mantine/core';
import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import {
  iphoneImages,
  androidImages,
  windowsImages,
} from '../../../constants/images';

import { NAV_LINKS } from './constants';

import styles from './HelpText.module.scss';

const { Item, Panel, Control } = Accordion;

const HelpText: FC = () => {
  const { t } = useTranslation('help');

  return (
    <Container className={styles.helpPage}>
      <Group>
        <NavLink
          label={t('nav.aboutProject')}
          href="#about-project"
          className={styles.navLink}
        />
        <NavLink label={t('nav.usage')} className={styles.navLink}>
          {NAV_LINKS.map((el, i) => (
            <NavLink
              label={t(`nav.${el}`)}
              href={`#${el}`}
              className={styles.navLink}
              key={i}
            />
          ))}
        </NavLink>
      </Group>

      <Divider my="lg" />

      <section id="about-project">
        <Title order={2}>{t('sections.aboutProject.title')}</Title>
        <Text mt="sm">
          <Trans
            i18nKey="help:sections.aboutProject.description"
            components={[
              <Anchor
                href="https://t.me/slaik31"
                target="_blank"
                rel="noopener noreferrer"
                key={0}
              />,
              <Anchor
                href="https://t.me/sqrrtm"
                target="_blank"
                rel="noopener noreferrer"
                key={1}
              />,
            ]}
          />
        </Text>
      </section>

      <Divider my="lg" />

      <section>
        <Title order={2}>{t('sections.usage.title')}</Title>
        <Text mt="sm">{t('sections.usage.description')}</Text>
      </section>

      <section id="Iphone">
        <Title order={3}>{t('sections.iphone.title')}</Title>
        <Text mt="sm">
          <Trans
            i18nKey="help:sections.iphone.description"
            components={[
              <Anchor
                href="https://apps.apple.com/us/app/v2raytun/id6476628951"
                target="_blank"
                rel="noopener noreferrer"
                key={0}
              />,
              <strong key={1} />,
              <em key={2} />,
            ]}
          />
        </Text>
        <Accordion
          className={styles.accordion}
          title={t('sections.iphone.accordion.screenshots')}
        >
          <Item value="screenshots">
            <Control>{t('sections.iphone.accordion.screenshots')}</Control>
            <Panel>
              {iphoneImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>

      <section id="Android">
        <Title order={3}>{t('sections.android.title')}</Title>
        <Text mt="sm">
          <Trans
            i18nKey="help:sections.android.description"
            components={[
              <Anchor
                href="https://play.google.com/store/apps/details?id=app.hiddify.com"
                target="_blank"
                rel="noopener noreferrer"
                key={0}
              />,
              <strong key={1} />,
            ]}
          />
        </Text>
        <Accordion
          className={styles.accordion}
          title={t('sections.android.accordion.screenshots')}
        >
          <Item value="screenshots">
            <Control>{t('sections.android.accordion.screenshots')}</Control>
            <Panel>
              {androidImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>

      <section id="Windows">
        <Title order={3}>{t('sections.windows.title')}</Title>
        <Text mt="sm">
          <Trans
            i18nKey="help:sections.windows.description"
            components={[
              <Anchor
                href="https://github.com/hiddify/hiddify-next/releases"
                target="_blank"
                rel="noopener noreferrer"
                key={0}
              />,
              <em key={1} />,
              <Badge key={2} />,
              <Anchor
                href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
                target="_blank"
                rel="noopener noreferrer"
                key={3}
              />,
            ]}
          />
        </Text>
        <Title mb={10} order={3}>
          {t('sections.windows.settings')}
        </Title>
        <Text className={styles.textBlock}>
          <Trans
            i18nKey="help:sections.windows.settingsDescription"
            components={[<em key={0} />, <strong key={2} />]}
          />
        </Text>
        <Accordion
          className={styles.accordion}
          title={t('sections.windows.accordion.screenshots')}
        >
          <Item value="screenshots">
            <Control>{t('sections.windows.accordion.screenshots')}</Control>
            <Panel>
              {windowsImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>

      <section id="Linux">
        <Title order={2}>{t('sections.linux.title')}</Title>
        <Text>
          <Trans
            i18nKey="help:sections.linux.description"
            components={[<em key={0} />]}
          />
        </Text>
      </section>
    </Container>
  );
};

export default HelpText;
