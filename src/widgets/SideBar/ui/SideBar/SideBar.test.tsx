import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/tests/componentRender/componentsRender';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = (screen.getByTestId('sidebar-toggle'));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
