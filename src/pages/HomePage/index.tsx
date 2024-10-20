import { Button, Card, Image, Text } from '@mantine/core';
import { FC } from 'react';
import styles from './styles.module.scss'

const HomePage: FC = () => {

  // const onClose = () => {
  //   tg.close()
  // }

  return (
    <section className={styles.home}>
      <div className={styles.empty}>
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
