'use client';

import type { IDocument } from '@smile/react-front-kit';
import type { IOption } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import {
  AppShell,
  Box,
  Checkbox,
  Flex,
  Group,
  Paper,
  Select,
  Space,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { CalendarBlank, CaretDown } from '@phosphor-icons/react';
import {
  DocumentList,
  FoldableColumnLayout,
  Header,
  Motif,
  Pagination,
  SearchBar,
  SidebarFilters,
} from '@smile/react-front-kit';
import {
  isNotNullNorEmpty,
  useSecondaryTheme,
} from '@smile/react-front-kit-shared';
import { useState } from 'react';

import {
  headerContent,
  headerLeft,
  headerRight,
  searchActions,
  searchDocuments,
} from '../pages.mock';

import classes from './SearchResults.module.css';

interface IOptionExtended extends IOption<string> {
  label: string;
}

interface ITypeFilter extends IOptionExtended {
  results: number;
}

/**
 * Example Page of a search results page, using `FoldableColumnLayout`
 */
export function SearchResults(): ReactElement {
  // style
  const theme = useMantineTheme();
  const numberOfResults = 135;
  // Search
  const [search, setSearch] = useState<string>('567890456');
  const [numberOfFiltersActive, setNumberOfFiltersActive] = useState(0);
  // Pagination
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  // FilterBar
  const [activeFilters, setActiveFilters] = useState([
    {
      categoryId: [2, 4],
      id: 7,
      label: 'Particulié',
      onRemove: () => {
        removeAllFilters();
      },
      value: 'particular',
    },
  ]);
  const [dupontFilter, setDupontFilter] = useState(false);
  const [martinFilter, setMartinFilter] = useState(false);
  const [andreeFilter, setAndreeFilter] = useState(false);
  const [cdiFilter, setCdiFilter] = useState(false);
  const [cddFilter, setCddFilter] = useState(false);
  const [freelanceFilter, setFreelanceFilter] = useState(false);
  const [particularFilter, setParticularFilter] = useState(true);
  const secondary = useSecondaryTheme();

  const menus = [
    {
      content: (
        <div>
          <Group>
            <Checkbox
              checked={dupontFilter}
              label="Dupont"
              onChange={(event) => {
                setActiveFiltersManager(1, event.target, 'Dupont');
              }}
              value="dupont"
            />
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={martinFilter}
              label="Martin"
              onChange={(event) => {
                setActiveFiltersManager(2, event.target, 'Martin');
              }}
              value="martin"
            />
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={andreeFilter}
              label="Andrée"
              onChange={(event) => {
                setActiveFiltersManager(3, event.target, 'Andrée');
              }}
              value="andrée"
            />
          </Group>
        </div>
      ),
      id: 1,
      label: `Nom du client`,
    },
    {
      children: [
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={cdiFilter}
                  label="CDI"
                  onChange={(event) => {
                    setActiveFiltersManager(4, event.target, 'CDI');
                  }}
                  value="CDI"
                />
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={cddFilter}
                  label="CDD"
                  onChange={(event) => {
                    setActiveFiltersManager(5, event.target, 'CDD');
                  }}
                  value="CDD"
                />
              </Group>
            </>
          ),
          id: 3,
          label: 'Contrat classique',
        },
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={freelanceFilter}
                  label="Freelance"
                  onChange={(event) => {
                    setActiveFiltersManager(6, event.target, 'Freelance');
                  }}
                  value="freelance"
                />
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={particularFilter}
                  label="Particulié"
                  onChange={(event) => {
                    setActiveFiltersManager(7, event.target, 'Particular');
                  }}
                  value="particular"
                />
              </Group>
            </>
          ),
          id: 4,
          label: 'Contrat special',
        },
      ],
      id: 2,
      label: 'Type de contrat',
    },
    {
      content: (
        <div className={classes.periodContainer}>
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label="Entre le"
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={getThemeColor(theme.primaryColor, theme)}
                size={20}
                weight="bold"
              />
            }
            value={undefined}
            valueFormat="DD/MM/YYYY"
          />
          <Space h="6px" />
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label="Et le"
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={getThemeColor(theme.primaryColor, theme)}
                size={20}
                weight="bold"
              />
            }
            value={undefined}
            valueFormat="DD/MM/YYYY"
          />
        </div>
      ),
      id: 5,
      label: 'Période',
    },
    { id: 6, label: 'Durée du contrat' },
    { id: 7, label: 'Nom du filtre' },
    { id: 8, label: 'Nom du filtre' },
    { id: 9, label: 'Nom du filtre' },
  ];

  // pagination row per page
  const rowsPerPageOptions = [
    { label: 'Afficher 5 résultats', value: 5 },
    { label: 'Afficher 10 résultats', value: 10 },
    { label: 'Afficher 20 résultats', value: 20 },
  ];
  // Search Type Filter
  const typeFilterOptions: ITypeFilter[] = [
    {
      label: `Tous (${numberOfResults})`,
      results: numberOfResults,
      value: 'all',
    },
    {
      label: `Factures (${Math.ceil(numberOfResults / 2)})`,
      results: Math.ceil(numberOfResults / 2),
      value: 'invoice',
    },
    {
      label: `Contrats (${Math.floor(numberOfResults / 2)})`,
      results: Math.floor(numberOfResults / 2),
      value: 'contract',
    },
  ];
  const [activeType, setActiveType] = useState<ITypeFilter>(
    typeFilterOptions[0],
  );
  const typeFilteredResults = activeType.results;
  // Filters Column
  const [isColumnVisible, setIsColumnVisible] = useState(true);
  const toggleLabel =
    !isColumnVisible && numberOfFiltersActive === 0
      ? `Voir les filtres`
      : isColumnVisible
        ? `Filtres actifs ${numberOfFiltersActive}`
        : `Voir les filtres actifs ${numberOfFiltersActive}`;
  // Sorting
  const sortingOptions: IOptionExtended[] = [
    { label: 'Trier par pertinence', value: 'relevance' },
    { label: 'Trier par titre', value: 'title' },
    { label: 'Trier par date de publication', value: 'publicationDate' },
    { label: 'Trier par auteur', value: 'author' },
    { label: 'Trier par emplacement', value: 'location' },
    { label: 'Trier par description', value: 'description' },
  ];
  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingOptions[0]?.value,
  );
  const totalPages = Math.ceil(typeFilteredResults / rowsPerPage);

  // Remove All filters on SidebarFilters
  const removeAllFilters = (): void => {
    setActiveFilters([]);
    setDupontFilter(false);
    setMartinFilter(false);
    setAndreeFilter(false);
    setCdiFilter(false);
    setCddFilter(false);
    setFreelanceFilter(false);
    setParticularFilter(false);
  };

  const setActiveFiltersManager = (
    id: number,
    element: EventTarget & HTMLInputElement,
    label: string,
  ): void => {
    let categoryId: number[] = [];
    switch (id) {
      case 1:
        setDupontFilter(element.checked);
        categoryId = [1];
        break;
      case 2:
        setMartinFilter(element.checked);
        categoryId = [1];
        break;
      case 3:
        setAndreeFilter(element.checked);
        categoryId = [1];
        break;
      case 4:
        setCdiFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 5:
        setCddFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 6:
        setFreelanceFilter(element.checked);
        categoryId = [2, 4];
        break;
      case 7:
        setParticularFilter(element.checked);
        categoryId = [2, 4];
        break;
    }

    if (id >= 0 && id <= 7) {
      const filtersId = activeFilters.map((filter) => filter.id);

      if (filtersId.includes(id)) {
        setActiveFilters(activeFilters.filter((element) => element.id !== id));
      } else {
        setActiveFilters([
          ...activeFilters,
          {
            categoryId,
            id,
            label,
            onRemove: () => {
              element.click();
            },
            value: element.value,
          },
        ]);
      }
    }
  };
  // Documents
  const [selectedDocuments, setSelectedDocuments] = useState<IDocument[]>([]);

  function handleDocumentSelected(
    selectedDocument: IDocument,
    isSelected: boolean,
  ): void {
    const newSelectedDocuments = [...selectedDocuments];
    if (
      newSelectedDocuments
        .map((document) => document.id)
        .includes(selectedDocument.id) &&
      !isSelected
    ) {
      delete newSelectedDocuments[
        newSelectedDocuments.findIndex(
          (document) => document.id === selectedDocument.id,
        )
      ];
    } else {
      newSelectedDocuments.push(selectedDocument);
    }
    setSelectedDocuments(newSelectedDocuments.filter(isNotNullNorEmpty));
  }

  return (
    <AppShell
      classNames={{ main: classes.main }}
      header={{ height: { base: 76, lg: 90 } }}
      padding={0}
    >
      <AppShell.Header>
        <Header
          childrenComponent="nav"
          hasSearch={false}
          left={headerLeft}
          right={headerRight}
        >
          {headerContent}
        </Header>
      </AppShell.Header>
      <AppShell.Main>
        <FoldableColumnLayout
          boxMotif={<Motif style={{ fill: '#868E96' }} />}
          boxProps={{
            p: { lg: '48px 64px' },
            style: { background: theme.colors.gray[8] },
          }}
          isColumnVisible={isColumnVisible}
          onChangeIsColumnVisible={setIsColumnVisible}
          sidebarContent={
            <SidebarFilters
              activeFilters={activeFilters}
              defaultOpenedMenuIds={[2, 4]}
              deleteButtonLabel="Supprimer tout"
              filterButtonLabel="Filtrer"
              menus={menus}
              onDeleteButtonClick={() => {
                removeAllFilters();
                setNumberOfFiltersActive(0);
              }}
              onFilterButtonClick={() => {
                setNumberOfFiltersActive(activeFilters.length);
              }}
              title="Filtres actifs"
            />
          }
          sidebarToggleLabel={toggleLabel}
          topBarRight={
            <Flex style={{ justifyContent: 'flex-end' }}>
              <Select
                data={sortingOptions}
                defaultValue={activeSorting}
                onChange={setActiveSorting}
              />
            </Flex>
          }
          topBlock={
            <Box mb={24}>
              <SearchBar
                leftSection={
                  <Select
                    className={classes.select}
                    classNames={{
                      dropdown: classes.selectDropdown,
                      section: classes.selectRight,
                    }}
                    comboboxProps={{ withinPortal: false }}
                    data={typeFilterOptions}
                    defaultValue={activeType.value}
                    onChange={(v) =>
                      setActiveType(
                        typeFilterOptions.find((type) => type.value === v) ??
                          typeFilterOptions[0],
                      )
                    }
                    rightSection={<CaretDown size={14} />}
                    size="lg"
                    variant="unstyled"
                  />
                }
                onChange={setSearch}
                value={search}
              />
            </Box>
          }
          topBlockTheme={secondary}
        >
          <Paper className={classes.documentListContainer} mb={24}>
            <DocumentList
              actionBarProps={{
                selectedElementsLabel: (n) =>
                  `${n} fichier${n > 1 ? 's' : ''} sélectionné${
                    n > 1 ? 's' : ''
                  }`,
              }}
              actions={searchActions}
              documents={searchDocuments}
              onDocumentSelected={handleDocumentSelected}
              selectedDocuments={selectedDocuments}
            />
          </Paper>
          <Pagination
            isTransparent
            itemsPerPage={rowsPerPage}
            itemsPerPageAriaLabel="Nombre de résultats"
            itemsPerPageOptions={rowsPerPageOptions}
            onItemsPerPageChange={setRowsPerPage}
            onPageChange={setPage}
            page={page}
            totalPages={totalPages}
          />
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
