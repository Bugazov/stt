import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Loader from './Loader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from './../../config/storybook/ThemeDecorator';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const LIGHT = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LIGHT.args = {
 
 
};
LIGHT.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DARK = Template.bind({});
DARK.args = {
};

DARK.decorators = [ThemeDecorator(Theme.DARK)]