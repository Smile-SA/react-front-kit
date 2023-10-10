'use client';

import type { ISidebarMenuProps } from './SidebarMenu';
import type { IMenuItem } from './types';
import type { IUniqueIdentifier } from '../../helpers';
import type { ReactElement } from 'react';

import { Paper } from '@mantine/core';

import { flatten } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

function getRecursiveMenu(
  onCollapseChange: (id: IUniqueIdentifier, isOpened: boolean) => void,
  onSelectChange: (id?: IUniqueIdentifier) => void,
  openedMenuIds: IUniqueIdentifier[],
  menu?: IMenuItem[],
  selectedId?: IUniqueIdentifier,
  level = 0,
): ReactElement[] | null {
  if (!menu) {
    return null;
  }
  return menu.map(({ children, ...props }) => (
    <CollapseButtonControlled
      {...props}
      key={props.id}
      collapsed={openedMenuIds.includes(props.id)}
      isOpenOnSelect
      level={level}
      line={level === 0}
      onCollapseChange={(isOpened) => onCollapseChange(props.id, isOpened)}
      onSelect={onSelectChange}
      selected={selectedId === props.id}
    >
      {getRecursiveMenu(
        onCollapseChange,
        onSelectChange,
        openedMenuIds,
        children,
        selectedId,
        level + 1,
      )}
    </CollapseButtonControlled>
  ));
}

export interface ISidebarMenuControlledProps extends ISidebarMenuProps {
  /** */
  onCollapseChange?: (openedMenuIds: IUniqueIdentifier[]) => void;
  /** */
  onSelectedChange?: (selectedId?: IUniqueIdentifier) => void;
  /** Controlled state of which menus are currently open, using `id` field of `IMenuItem` */
  openedMenuIds?: IUniqueIdentifier[];
  /** Controlled state of which `IMenuItem` menu is currently selected */
  selectedId?: IUniqueIdentifier;
}

/** Props extend the `SidebarMenu` component */
export function SidebarMenuControlled(
  props: ISidebarMenuControlledProps,
): ReactElement {
  const {
    component = 'div',
    hasOnlyOneOpenMenu = false,
    menu,
    onCollapseChange,
    onSelectedChange,
    openedMenuIds = [],
    selectedId,
    ...paperProps
  } = props;

  function handleCollapseChange(
    menuId: IUniqueIdentifier,
    isOpened: boolean,
  ): void {
    if (hasOnlyOneOpenMenu && isOpened) {
      /** Flatten and add calculated path property to the entire nested array of menus,
       * keep only the path from the menu being clicked **/
      const openedMenuPath = flatten<IMenuItem>(menu).find(
        (menu) => menu.id === menuId,
      )?.path;
      onCollapseChange?.(openedMenuPath ?? []);
    } else {
      /** Add or remove id being clicked **/
      onCollapseChange?.(
        openedMenuIds.includes(menuId)
          ? openedMenuIds.filter((id) => id !== menuId)
          : openedMenuIds.concat(menuId),
      );
    }
  }

  return (
    <Paper
      // @ts-expect-error wrong type for polymorphic component
      component={component}
      p="lg"
      shadow=""
      {...paperProps}
    >
      {getRecursiveMenu(
        (id, isOpened) =>
          onCollapseChange && handleCollapseChange(id, isOpened),
        (id) => onSelectedChange && onSelectedChange(id),
        openedMenuIds,
        menu,
        selectedId,
      )}
    </Paper>
  );
}
