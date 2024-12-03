import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from '@dan-ignite-ui/react';

export default {
  title: 'Toast/Toast',
  component: Toast,
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    DayInText: 'Quarta feira',
    Day: '23',
    Month: 'Outubro',
    hour: '16h',
  },
};
