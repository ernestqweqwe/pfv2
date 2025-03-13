import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },

};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
    },

};

export const OutlinedSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L,
    },

};

export const OutlinedSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.M,
    },

};

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL,
    },

};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },

};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },

};

export const BackgroundThemeInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },

};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },

};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },

};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },

};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },

};
