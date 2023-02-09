import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Header from './Header';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const LIGHT = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LIGHT.args = {
 
 
};
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DARK = Template.bind({});
DARK.args = {
};

DARK.decorators = [ThemeDecorator(Theme.DARK)]