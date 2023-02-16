import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    args: {
    },
} as ComponentMeta<typeof NotFoundPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
