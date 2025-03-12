import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'shared/ThemeSwitcher',
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],

};
