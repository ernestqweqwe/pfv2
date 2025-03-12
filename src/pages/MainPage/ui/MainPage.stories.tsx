import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage',
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],

};
