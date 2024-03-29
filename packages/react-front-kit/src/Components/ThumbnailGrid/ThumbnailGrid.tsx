'use client';

import type { IThumbnail, IThumbnailAction } from '../../types';
import type { IActionBarProps } from '../ActionBar/ActionBar';
import type { SimpleGridProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { SimpleGrid } from '@mantine/core';

import { ActionBar } from '../ActionBar/ActionBar';
import { Thumbnail } from '../Thumbnail/Thumbnail';

import classes from './ThumbnailGrid.module.css';

function defaultSelectedElementsText(n: number): string {
  return `${n} selected file${n > 1 ? 's' : ''}`;
}

export interface IThumbnailGridProps extends SimpleGridProps {
  actionBarProps?: Omit<
    IActionBarProps<IThumbnail>,
    'actions' | 'selectedElements'
  >;
  actions?: IThumbnailAction[];
  onThumbnailClick?: (item: IThumbnail, index: number) => void;
  selectedElementsText?: (numberOfSelectedElements: number) => string;
  thumbnails: IThumbnail[];
}

/** Additional props will be forwarded to the [Mantine SimpleGrid component](https://mantine.dev/core/simple-grid) */
export function ThumbnailGrid(props: IThumbnailGridProps): ReactElement {
  const {
    actionBarProps,
    actions = [],
    onThumbnailClick,
    selectedElementsText = defaultSelectedElementsText,
    thumbnails,
    ...simpleGridProps
  } = props;

  const selectedElements = thumbnails.filter((thumbnail) => thumbnail.selected);
  const numberOfSelectedElements = selectedElements.length;
  const massActions = actions.filter(({ isMassAction }) => isMassAction);
  const itemActions = actions.filter(({ isItemAction = true }) => isItemAction);

  function handleSelect(index: number): void {
    onThumbnailClick?.(thumbnails[index], index);
  }

  return (
    <div className={classes.container}>
      {numberOfSelectedElements > 0 && (
        <ActionBar<IThumbnail>
          actions={massActions}
          selectedElements={selectedElements}
          selectedElementsLabel={selectedElementsText}
          {...actionBarProps}
        />
      )}
      <SimpleGrid {...simpleGridProps}>
        {thumbnails.map((thumbnail, index) => (
          <Thumbnail
            key={thumbnail.id}
            actions={itemActions}
            onClick={() => handleSelect(index)}
            {...thumbnail}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
