import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],

};
