import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from './../../config/storybook/ThemeDecorator';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Text",
  theme: AppLinkTheme.PRIMARY
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Text",
  theme: AppLinkTheme.SECONDARY
};

Secondary.decorators = [ThemeDecorator(Theme.DARK)]


