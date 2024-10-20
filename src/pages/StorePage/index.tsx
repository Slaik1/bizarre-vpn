import { FC } from 'react';
import { vpnSubscriptions } from './constats';
import { Card, Grid, Text, Badge, Group, Button, Center } from '@mantine/core';

const StorePage: FC = () => {
  return (
    <div>
      <Grid>
        {vpnSubscriptions.map((subscription, index) => (
          <Grid.Col key={index} >
            <Card shadow="md" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Center>
                  <Text size="xl" mt="md">
                    {subscription.countryFlag} Подписка на {subscription.duration}
                  </Text>
                </Center>
              </Card.Section>

              <Group  mt="md" mb="xs">
                <Badge size="lg" color={subscription.limit === "Без лимита" ? "green" : "orange"}>
                  {subscription.limit}
                </Badge>
                <Badge size="lg" color="blue">
                  Скорость: {subscription.maxSpeed}
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                {subscription.description}
              </Text>

              <Text size="xl" mt="md">
                Цена: {subscription.price}
              </Text>

              <Button fullWidth mt="md" radius="md">
                Оформить подписку
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default StorePage;
