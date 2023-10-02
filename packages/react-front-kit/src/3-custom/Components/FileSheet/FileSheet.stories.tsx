import type { Meta, StoryObj } from '@storybook/react';

import { Suitcase, User } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { FileSheet as Cmp } from './FileSheet';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FileSheet',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FileSheet: IStory = {
  args: {
    cards: [
      {
        image: <User color="#0B7285" size={20} />,
        onAction: (): void => {
          action('Click on first card');
        },
        title: 'Individual contract',
      },
      {
        image: <Suitcase color="#0B7285" size={20} />,
        onAction: (): void => {
          action('Click on second card');
        },
        title: '2 Lines text for example',
      },
    ],
    cardsColor: '',
    dropZone: false,
    motifVisible: true,
    title: <h1>Jean-Michel DUPONT</h1>,
  },
};