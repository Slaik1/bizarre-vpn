import { Button, Card, Image, Text } from '@mantine/core';
import { FC } from 'react';

import styles from './styles.module.scss'

const HomePage: FC = ({}) => {
  return (
    <section className={styles.home}>
      <div className={styles.empty}>
        <Image src="./src/assets/images/empty.png" w={200} />
        <h1>У вас нет активных подписок</h1>
      </div>
      <Card  padding="lg" radius="md" >
				<Text>Оформить тестовую подписку ?</Text>
        <Button mt={20}>Оформить</Button>
      </Card>
    </section>
  );
};

export default HomePage;
