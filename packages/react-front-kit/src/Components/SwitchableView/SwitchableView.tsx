'use client';

import type {
  PaperProps,
  SegmentedControlItem,
  SegmentedControlProps,
} from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Paper, SegmentedControl } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

import classes from './SwitchableView.module.css';

export interface IDataView extends SegmentedControlItem {
  dataView: ReactNode;
}

export interface ISwitchableViewProps extends PaperProps {
  /** Default index of the active view */
  defaultValue?: number;
  /** Called when active view changes */
  onChange?: (index: number) => void;
  /** Extra Props, or function returning props for the SegmentedControl component, except 'data', 'defaultValue', 'onChange' and 'value' which are handled by this component */
  segmentedControlProps?: Omit<
    SegmentedControlProps,
    'data' | 'defaultValue' | 'onChange' | 'value'
  >;
  /** ReactNode for the left section of the top bar */
  topBarLeft?: ReactNode;
  /** ReactNode for the right section of the top bar, to the left of the SegmentedControl buttons */
  topBarRight?: ReactNode;
  /** ReactNode for the content below the top bar */
  topContent?: ReactNode;
  /** Index of the active view, when component is controlled */
  value?: number;
  /** Array of all views */
  views: IDataView[];
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper) */
export function SwitchableView(props: ISwitchableViewProps): ReactElement {
  const {
    defaultValue,
    onChange,
    segmentedControlProps,
    topBarLeft,
    topBarRight,
    topContent,
    value,
    views = [],
    ...paperProps
  } = props;
  const [activeViewIndex, setActiveViewIndex] = useUncontrolled<number>({
    defaultValue,
    finalValue: 0,
    onChange,
    value,
  });
  const activeView = views[activeViewIndex];

  function handleViewChange(value: string): void {
    setActiveViewIndex(views.findIndex((view) => view.value === value));
  }

  return (
    <Paper className={classes.container} {...paperProps}>
      <div className={classes.topBar}>
        {Boolean(topBarLeft) && (
          <span className={classes.topBarLeft}>{topBarLeft}</span>
        )}
        <span className={classes.topBarRight}>
          {topBarRight}
          <SegmentedControl
            classNames={{ label: classes.switchButton }}
            data={views}
            onChange={handleViewChange}
            radius={4}
            size="md"
            value={activeView.value}
            {...segmentedControlProps}
          />
        </span>
      </div>
      {topContent ? <>{topContent}</> : null}
      <div>{activeView.dataView ?? ''}</div>
    </Paper>
  );
}
