import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { menu } from '../SidebarFilterMenu/SidebarFilterMenu.mock';

import { Filters as Cmp } from './Filters';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Filters',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Filters: IStory = {
  args: {
    activeFilters: [
      {
        id: 1,
        label: 'Dupont',
        onRemove: action('remove'),
        value: 'Dupont',
      },
      {
        id: 1,
        label: 'Patate',
        onRemove: action('remove'),
        value: 'patate',
      },
    ],
    deleteButtonLabel: 'Supprimer tout',
    filterLabelButton: 'Filtrer',
    sideBarFiltersMenu: menu,
    title: 'Filters actifs',
  },
};
