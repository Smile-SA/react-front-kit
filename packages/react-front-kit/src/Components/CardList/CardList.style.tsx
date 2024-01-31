import type { MantineNumberSize } from '@mantine/styles';

import { createStyles, getSize } from '@mantine/styles';

export const useStyles = createStyles(
  (
    theme,
    { separator, spacing }: { separator: boolean; spacing: MantineNumberSize },
  ) => ({
    item: {
      '&:after': {
        background: theme.colors.gray[2],
        bottom: `calc(-${getSize({
          size: spacing,
          sizes: theme.spacing,
        })} / 2)`,
        content: '""',
        display: separator ? 'block' : 'none',
        height: '1px',
        left: '0px',
        position: 'absolute',
        width: '100%',
      },
      '&:last-child': {
        '&:after': {
          display: 'none',
        },
        marginBottom: '0',
      },
      position: 'relative',
    },
    rootScrollBar: { margin: '32px 0', padding: '0px 32px' },
    scrollBar: {
      background: theme.colors.gray[1],
      width: '7px !important',
    },
    stack: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0',
    },
    thumb: {
      background: theme.colors.gray[7],
    },
  }),
);
