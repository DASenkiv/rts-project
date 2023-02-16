import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ui/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text',
};

export const Red = Template.bind({});
Red.args = {
    theme: AppLinkTheme.RED,
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'Text',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});

RedDark.args = {
    theme: AppLinkTheme.RED,
    children: 'Text',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
