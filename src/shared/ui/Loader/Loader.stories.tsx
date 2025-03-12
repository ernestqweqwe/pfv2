import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],

};
