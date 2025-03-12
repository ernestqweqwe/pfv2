import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkThem } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'shared/AppLink',
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
    args: {
        children: 'Text',
        theme: AppLinkThem.PRIMARY,

    },

};

export const SecondaryLight: Story = {
    args: {
        children: 'Text',
        theme: AppLinkThem.SECONDARY,

    },

};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkThem.PRIMARY,

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkThem.SECONDARY,

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
