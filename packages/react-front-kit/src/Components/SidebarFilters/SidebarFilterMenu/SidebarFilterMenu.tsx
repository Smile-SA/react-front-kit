'use client';

import type { ICollapseButtonProps } from '../../CollapseButton/CollapseButton';
import type {
  IMenuItem,
  ISidebarMenuProps,
} from '../../SidebarMenu/SidebarMenu';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { useMantineTheme } from '@mantine/core';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../../helpers';
import { CollapseButtonControlled } from '../../CollapseButton/CollapseButtonControlled';

import { useStyles } from './SidebarFilterMenu.style';

export interface IFiltersItem<T extends number | string>
  extends Omit<IMenuItem<T>, 'children'> {
  children?: IFiltersItem<T>[];
  content?: ReactNode;
}

export interface ISidebarFilterMenuProps<
  T extends number | string,
  C extends ElementType,
> extends Omit<ISidebarMenuProps<T, C>, 'menu'>,
    PaperProps {
  menu?: IFiltersItem<T>[];
}

// eslint-disable-next-line react-refresh/only-export-components
export function getRecursiveMenu<
  T extends number | string,
  C extends ElementType,
>(
  classes: {
    buttonInner: string;
    buttonLabel: string;
    buttonRoot: string | undefined;
    contentContainer: string;
  },
  setSelectedId: (id?: T) => void,
  onMenuOpen: (id: T, isOpened: boolean) => void,
  openedMenuIds: T[],
  selectedId?: T,
  menu?: IFiltersItem<T>[],
  collapseButtonProps?:
    | Omit<ICollapseButtonProps<T, C>, 'opened'>
    | ((item: IFiltersItem<T>) => Omit<ICollapseButtonProps<T, C>, 'opened'>),
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map((item) => {
    const { content, children, id, label, leftIcon } = item;

    const theme = useMantineTheme();
    const collapseStyle =
      openedMenuIds.includes(id) && selectedId === id
        ? {
            backgroundColor: theme.colors[theme.primaryColor][0],
            borderTop: `1px solid ${theme.colors[theme.primaryColor][2]}`,
          }
        : openedMenuIds.includes(id)
          ? {
              borderTop: `1px solid ${theme.colors.gray[3]}`,
            }
          : {};
    return (
      <CollapseButtonControlled
        key={id}
        classNames={{
          inner: classes.buttonInner,
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
        id={id}
        indentation="simple"
        isOpenOnSelect
        label={label}
        leftIcon={leftIcon}
        level={level}
        onCollapseChange={(isOpened) => onMenuOpen(id, isOpened)}
        onSelect={setSelectedId}
        opened={openedMenuIds.includes(id)}
        selected={selectedId === id}
        {...(typeof collapseButtonProps === 'function'
          ? collapseButtonProps(item)
          : collapseButtonProps)}
        collapseProps={{ style: collapseStyle }}
      >
        {getRecursiveMenu(
          classes,
          setSelectedId,
          onMenuOpen,
          openedMenuIds,
          selectedId,
          children,
          collapseButtonProps,
          level + 1,
        )}
        {Boolean(content) && (
          <div className={classes.contentContainer}>{content}</div>
        )}
      </CollapseButtonControlled>
    );
  });
}

// eslint-disable-next-line no-warning-comments
// TODO: use (and modify) SidebarMenu instead of a copy
export function SidebarFilterMenu<
  T extends number | string,
  C extends ElementType = 'button',
>(props: ISidebarFilterMenuProps<T, C>): ReactElement {
  const {
    collapseButtonProps,
    defaultSelectedId,
    menu,
    onMenuOpen,
    openedMenuIds = [],
  } = props;
  const { classes } = useStyles();
  const flatMenu = useMemo(
    () => flattenNestedObjects(addPathAndDepth(menu)),
    [menu],
  );

  const [selectedId, setSelectedId] = useState<T | undefined>(
    defaultSelectedId,
  );

  function handleOpenChange(menuId: T, isOpened: boolean): void {
    const openedMenuPath = (flatMenu.find((menu) => menu.id === menuId)?.path ??
      []) as T[];
    onMenuOpen?.(menuId, isOpened, openedMenuPath);
  }

  return (
    <div>
      {getRecursiveMenu(
        classes,
        setSelectedId,
        handleOpenChange,
        openedMenuIds,
        selectedId,
        menu,
        collapseButtonProps,
      )}
    </div>
  );
}
