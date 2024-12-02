import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o Elemento</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    }
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
      <Text>Testando o elemento Box</Text>
      </>
    ),
  },
};
