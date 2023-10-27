'use client';
import type { PaginationProps } from '@mantine/core';
import type { FlexProps } from '@mantine/core/lib/Flex/Flex';
import type { SelectProps } from '@mantine/core/lib/Select/Select';
import type { IOptions } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import {
  Flex,
  Pagination as MantinePagination,
  Select,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((_, styleTransparent: boolean) => ({
  container: {
    justifyContent: 'space-between',
  },
  control: {
    backgroundColor: styleTransparent ? 'transparent' : '',
    borderColor: styleTransparent ? 'transparent' : '',
  },
}));

export interface IPaginationProps extends FlexProps {
  isTransparent?: boolean;
  itemsPerPage: number;
  itemsPerPageAriaLabel?: string;
  itemsPerPageOptions?: IOptions<number>;
  onItemsPerPageChange?: (value: number) => void;
  onPageChange?: (value: number) => void;
  page: number;
  paginationProps?: PaginationProps;
  selectProps?: SelectProps;
  totalPages: number;
}

/** Additional props will be forwarded to the [Mantine Flex component](https://mantine.dev/core/flex) */
export function Pagination(props: IPaginationProps): ReactElement {
  const {
    isTransparent = false,
    itemsPerPage,
    itemsPerPageAriaLabel,
    itemsPerPageOptions = [],
    onItemsPerPageChange,
    onPageChange,
    page,
    paginationProps,
    selectProps,
    totalPages,
    ...flexProps
  } = props;
  const { classes } = useStyles(isTransparent);

  /* methods */
  function handleChangeItemsPerPage(value: string): void {
    if (value) {
      onItemsPerPageChange?.(Number(value));
    }
  }

  function handleChangePage(value: number): void {
    onPageChange?.(value);
  }

  return (
    <Flex className={classes.container} data-testid="pagination" {...flexProps}>
      {itemsPerPageOptions.length > 0 && itemsPerPageAriaLabel ? (
        <Select
          aria-label={itemsPerPageAriaLabel}
          data={itemsPerPageOptions.map((option) => {
            return {
              label: option.label ?? option.value.toString(),
              value: option.value.toString(),
            };
          })}
          data-testid="pagination-itemsPerPage"
          onChange={handleChangeItemsPerPage}
          size="xs"
          value={itemsPerPage.toString()}
          {...selectProps}
        />
      ) : null}
      <MantinePagination
        classNames={{ control: classes.control }}
        data-testid="pagination-page"
        onChange={handleChangePage}
        radius="sm"
        size="sm"
        total={totalPages}
        value={page}
        withControls={false}
        {...paginationProps}
      />
    </Flex>
  );
}
