import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from 'widgets/SideBar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'widgets/Sidebar',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
