'use client';

import type { MantineNumberSize, ScrollAreaProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ScrollArea, Stack } from '@mantine/core';

import { useStyles } from './CardList.style';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactElement | ReactNode[];
  separator?: boolean;
  spacing?: MantineNumberSize;
}

export function CardList(props: ICardListProps): ReactElement {
  const {
    children,
    separator = true,
    spacing = 'xl',
    ...scrollAreaProps
  } = props;
  const { classes } = useStyles({ separator, spacing });
  return (
    <ScrollArea
      {...scrollAreaProps}
      classNames={{
        root: classes.rootScrollBar,
        scrollbar: classes.scrollBar,
        thumb: classes.thumb,
      }}
    >
      {Array.isArray(children) ? (
        <Stack className={classes.stack} spacing={spacing}>
          {children.map((item: ReactNode, index: number) => (
            <div key={`${index + index}`} className={classes.item}>
              {item}
            </div>
          ))}
        </Stack>
      ) : (
        <div className={classes.item}>{children}</div>
      )}
    </ScrollArea>
  );
}
