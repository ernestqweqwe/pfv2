import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: 'pages/AboutPage',
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],

};
