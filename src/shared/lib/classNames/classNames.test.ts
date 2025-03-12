import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods and  additional params', () => {
        const expected = 'someClass class1 class2 hovered disable';
        expect(classNames(
            'someClass',
            { hovered: true, disable: true, test: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
