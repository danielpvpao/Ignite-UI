import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
 
addons.setConfig({
  docs:{
    theme: themes.dark,
  }
});