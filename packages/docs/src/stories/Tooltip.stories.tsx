import { Meta, StoryObj } from '@storybook/react';
import { CalendarBlock, Tooltip, TooltipProps } from '@dan-ignite-ui/react';
import { styled } from '@stitches/react';

export default {
  title: 'Date/Tooltip',
  component: Tooltip,
  args: {
    Day: '03',
    Month: 'Dezembro',
    Availability: 'Disponível',
    Visibility: 'Invisible',
  },
  argTypes: {
    Availability: {
      options: ['Disponível', 'Indisponível'],
      control: {
        type: 'inline-radio',
      },
    },
    Visibility: {
      options: ['Visible', 'Invisible'],
      control: {
        type: 'inline-radio',
      },
    }
  },
  decorators: [
    (Story) => {
      const HoverWrapper = styled('div', {
        position: 'relative',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        opacity: 1,
        width: '4%',
        margin: '14rem auto',
        '&:hover div':{
             opacity: "inherit",
        }
      });

      return (
        <HoverWrapper>
            <Story />
          <CalendarBlock>
            {Primary.args?.Day}
          </CalendarBlock>
        </HoverWrapper>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    Day: '03',
    Month: 'Dezembro',
    Availability: 'Indisponível',
    Visibility: 'Invisible',
  },
};
