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

import {
  iphoneImages,
  androidImages,
  windowsImages,
} from '../../../constants/images';

import { NAV_LINKS } from './constants';

import styles from './styles.module.scss';

const { Item, Panel, Control } = Accordion;

const HelpText: FC = () => {
  return (
    <Container className={styles.helpPage}>
      <Group>
        <NavLink
          label="О проекте"
          href="#about-project"
          className={styles.navLink}
        />
        <NavLink label="Использование" className={styles.navLink}>
          {NAV_LINKS.map((el, i) => (
            <NavLink
              label={el}
              href={`#${el}`}
              className={styles.navLink}
              key={i}
            />
          ))}
        </NavLink>
      </Group>

      <Divider my="lg" />

      <section id="about-project">
        <Title order={2}>О проекте</Title>
        <Text mt="sm">
          Мы не отслеживаем ваш трафик и не собираем какую-либо информацию 😉
          <br /> <br />
          Если что-то пошло не так или вы заметили не правильную работу
          приложения обращаться к
          <Anchor className={styles.link} href="https://t.me/slaik31">
            Slaik
          </Anchor>
          или
          <Anchor mr={0} className={styles.link} href="https://t.me/sqrrtm">
            Rayya
          </Anchor>
          .
        </Text>
      </section>

      <Divider my="lg" />

      <section>
        <Title order={2}>Использование</Title>
        <Text mt="sm">
          Ниже описаны способы установки на различные платформы
        </Text>
      </section>

      <section id="Iphone">
        <Title order={3}>Iphone</Title>
        <Text mt="sm">
          <span className={styles.textBlock}>
            Скачать Приложение
            <Anchor
              className={styles.link}
              href="https://apps.apple.com/us/app/v2raytun/id6476628951"
              target="_blank"
              mr={0}
            >
              v2RayTun
            </Anchor>
            . После чего скопировать конфиг и добавить его в приложение. Правый
            верхний укол нажать + после чего{' '}
            <em>Добавить из буфера → Разрешить вставку → Подключиться.</em>
          </span>
          <br />
          Также у данного приложения существует большой перечень настроек для
          выборочного применения VPN к приложениям, сайтам или регионам в
          разделе <em>Службы.</em>
        </Text>
        <Accordion className={styles.accordion} title="Скриншоты v2RayTun">
          <Item value="screenshots">
            <Control>Скриншоты</Control>
            <Panel>
              {iphoneImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>
      <section id="Android">
        <Title order={3}>Android</Title>
        <Text mt="sm">
          Приложение
          <Anchor
            className={styles.link}
            href="https://play.google.com/store/apps/details?id=app.hiddify.com"
            target="_blank"
            mr={0}
          >
            Hiddify
          </Anchor>
          . После чего скопировать конфиг и добавить его в приложение.{' '}
          <em>Новый профиль → Добавить из буфер обмена → Подключиться</em>
        </Text>
        <Accordion className={styles.accordion} title="Посмотреть скриншоты">
          <Item value="screenshots">
            <Control>Посмотреть скриншоты</Control>
            <Panel>
              {androidImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>
      <section id="Windows">
        <Title order={3}>Windows</Title>
        <Text mt="sm">
          <span className={styles.textBlock}>
            Приложение Hiddify нужно запускать с правами администратора. Поэтому
            рекомендуется скачать его с официальной страницы
            <Anchor
              className={styles.link}
              href="https://github.com/hiddify/hiddify-next/releases"
              target="_blank"
            >
              Github.
            </Anchor>
            Нужно открыть раздел <em>Assets</em> и скачать подходящую вам
            версию. В нашем случае это <em>Hiddify-Windows-Setup-x64.exe.</em>{' '}
            Также рекомендуется выбрать релиз с надписью <Badge>Latest</Badge>
          </span>
          <br />
          <span className={styles.textBlock}>
            Либо скачать с
            <Anchor
              className={styles.link}
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              target="_blank"
            >
              Microsoft Store.
            </Anchor>
          </span>
        </Text>
        <Title mb={10} order={3}>
          Настройка приложения
        </Title>
        <Text className={styles.textBlock}>
          Если вы скачали приложение с Github то у вас есть возможность
          настроить автозапуск с правами администратора. Для этого нажмите на
          ярлык правой кнопкой мыши и зайдите в{' '}
          <em>
            Свойства → Совместимость → Запуск от имени администратора →
            Применить
          </em>
          .
          <span className={styles.textBlock}>
            После запуска приложения добавьте конфиг, преждевременно его
            скопировав. Нажмите на иконку + в правом верхнем углу → Добавить из
            буфер обмена. После чего выберите в правом верхнем углу выберите
            иконку настроек. В появившемся меню измените с <em>Прокси</em> на{' '}
            <em>VPN</em>. Теперь можете подключаться!
          </span>
        </Text>
        <Accordion className={styles.accordion} title="Посмотреть скриншоты">
          <Item value="screenshots">
            <Control>Посмотреть скриншоты</Control>
            <Panel>
              {windowsImages.map((el, i) => (
                <Image src={el.image} alt={el.title} mt="sm" key={i} />
              ))}
            </Panel>
          </Item>
        </Accordion>
      </section>
      <section id="Linux">
        <Title order={2}>Linux</Title>
        <Text>
          Аналогично подключению с Windows, только вместо <em>.exe</em> нужно
          выбрать <em>Hiddify-Linux-x64.AppImage</em>
        </Text>
      </section>
    </Container>
  );
};

export default HelpText;
