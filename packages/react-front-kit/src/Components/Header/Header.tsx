'use client';

import type { HeaderProps, MantineThemeOverride } from '@mantine/core';
import type { ElementType, FormEvent, ReactElement, ReactNode } from 'react';

import {
  Button,
  Flex,
  Header as MantineHeader,
  MantineProvider,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import { HeaderSearch } from '../HeaderSearch/HeaderSearch';

const useStyles = createStyles((theme) => ({
  around: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  button: {
    '&::after': {
      background:
        theme.colorScheme === 'light'
          ? theme.colors.gray[3]
          : theme.colors.gray[8],
      content: '""',
      display: 'block',
      height: 36,
      position: 'absolute',
      right: 0,
      top: '50%',
      translate: '0 -50%',
      width: 1,
    },
    background: 'transparent',
    borderRadius: 0,
    position: 'relative',
  },
  buttonOpened: {
    '&::after': {
      display: 'none',
    },
    background: theme.fn.primaryColor(),
    color: theme.white,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 64px',
    position: 'relative',
    width: '100%',
  },
  menu: {
    alignItems: 'center',
    gap: theme.spacing.xl,
    left: '50%',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    translate: '-50% -50%',
  },
}));

export interface IHeaderProps
  extends Omit<HeaderProps, 'height' | 'left' | 'right'> {
  childrenComponent?: ElementType;
  height?: number;
  left?: ReactNode;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (event: FormEvent) => void;
  right?: ReactNode;
  searchTheme?: MantineThemeOverride;
  searchValue?: string;
}

/** Additional props will be forwarded to the [Mantine AppShell (Header) component](https://mantine.dev/core/app-shell/) */
export function Header(props: IHeaderProps): ReactElement {
  const {
    children,
    childrenComponent,
    height = 90,
    left,
    onSearchChange,
    onSearchSubmit,
    right,
    searchTheme,
    searchValue,
    withBorder = true,
    ...headerProps
  } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const header = useClickOutside(() => setOpened(false));
  const defaultTheme = useMantineTheme();

  function handleClick(): void {
    setOpened(!opened);
  }

  const buttonClasses = [classes.button];
  if (opened) {
    buttonClasses.push(classes.buttonOpened);
  }

  return (
    <MantineHeader
      ref={header}
      height={opened ? height + 110 : height}
      withBorder={withBorder}
      {...headerProps}
    >
      <Flex className={classes.container} h={height}>
        <Flex className={classes.around}>{left}</Flex>
        <Flex
          className={classes.menu}
          // @ts-expect-error wrong type for Flex component
          component={childrenComponent}
        >
          {children}
        </Flex>
        <Flex className={classes.around}>
          <Button
            className={buttonClasses.join(' ')}
            data-testid="search"
            h={height}
            onClick={handleClick}
            variant="white"
            w={height}
          >
            <MagnifyingGlass size={32} />
          </Button>
          {Boolean(opened) && (
            <MantineProvider theme={searchTheme ?? defaultTheme}>
              <HeaderSearch
                data-testid="searchBar"
                onChange={onSearchChange}
                onSubmit={onSearchSubmit}
                opened={opened}
                value={searchValue}
              />
            </MantineProvider>
          )}
          {right}
        </Flex>
      </Flex>
    </MantineHeader>
  );
}