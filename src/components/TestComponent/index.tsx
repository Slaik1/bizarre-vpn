import { Button, Slider, Textarea } from '@mantine/core';
import { FC } from 'react';

const TestComponent: FC = ({}) => {
  return (
    <div>
      <Button>hello</Button>
      <Slider
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
      <Textarea
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />
    </div>
  );
};

export default TestComponent;
