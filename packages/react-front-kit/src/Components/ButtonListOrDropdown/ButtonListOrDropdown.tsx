'use client';
import type { ButtonProps, MenuProps } from '@mantine/core';
import type { IItems } from '@smile/react-front-kit-shared';
import type { ReactElement, ReactNode } from 'react';

import { Button, Menu, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  buttonActive: {
    backgroundColor: theme.colors[theme.primaryColor][8],
    fontWeight: 700,
  },
}));

export interface IButtonListOrDropdownProps extends MenuProps {
  buttonProps?: ButtonProps;
  current?: string;
  defaultCurrent: string;
  items: IItems<string>;
  maxButtonItems?: number;
  onAction?: () => void;
}

export function ButtonListOrDropdown(
  props: IButtonListOrDropdownProps,
): ReactElement {
  const {
    buttonProps,
    current,
    maxButtonItems = 0,
    defaultCurrent,
    items = [],
    onAction,
    ...MenuProps
  } = props;

  const { classes } = useStyles();

  const [_current, setCurrent] = useUncontrolled({
    defaultValue: defaultCurrent,
    onChange: onAction,
    value: current,
  });

  function handleChange(currentValue: string): void {
    setCurrent(currentValue);
  }

  function getCurrentItem(currentValue: string): ReactNode {
    const currentItem = items.filter((item) => item.value === currentValue);
    return (
      currentItem.length > 0 && currentItem[0].content && currentItem[0].content
    );
  }

  return (
    <>
      {items.length < maxButtonItems ? (
        <Button.Group>
          {items.map((item) => {
            return (
              <Button
                className={item.value === _current ? classes.buttonActive : ''}
                {...buttonProps}
                key={item.value}
                onClick={() => handleChange(item.value)}
              >
                {item.content ? item.content : item.label}
              </Button>
            );
          })}
        </Button.Group>
      ) : (
        <Menu {...MenuProps}>
          <Menu.Target>
            <Button {...buttonProps}>{getCurrentItem(_current)}</Button>
          </Menu.Target>
          <Menu.Dropdown>
            {items.map((item) => {
              if (item.value !== _current) {
                return (
                  <Menu.Item
                    key={item.value}
                    onClick={() => handleChange(item.value)}
                  >
                    {item.content ? item.content : item.label}
                  </Menu.Item>
                );
              }
              return '';
            })}
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
}