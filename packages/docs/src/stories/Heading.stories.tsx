import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps} from '@dan-ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['sm', 'md', 'lg',  '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 heading',    
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propiedade `as`.'
            }
        }
    }
};
