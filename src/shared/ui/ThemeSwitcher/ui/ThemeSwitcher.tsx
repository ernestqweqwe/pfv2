import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-switcher.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            <ThemeIcon />
        </Button>
    );
};
