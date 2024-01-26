import { createStyles } from '@mantine/styles';

export const useStyles = createStyles(
  (theme, { separator, spacing }: { separator: boolean; spacing: string }) => ({
    item: {
      '&:after': {
        background: theme.colors.gray[2],
        bottom: `calc(-${spacing} / 2)`,
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
      display: 'inline-block',
      marginBottom: spacing,
      position: 'relative',
    },
    scrollBar: {
      background: theme.colors.gray[1],
      width: '7px !important',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0',
    },
    thumb: {
      background: theme.colors.gray[7],
    },
  }),
);