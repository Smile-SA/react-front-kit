'use client';

import type { IAgendaItemOrder } from './AgendaItemPage.mock';
import type { ReactElement, ReactNode } from 'react';

import { AppShell, Button, Group, Stack, Tabs, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  Breadcrumbs,
  ConfirmModal,
  FoldableColumnLayout,
  SidebarMenu,
} from '@smile/haring-react';
import { useState } from 'react';

import {
  breadcrumbsMock,
  menusMock,
  tabsMock,
  texts,
} from './AgendaItemPage.mock';
import classes from './AgendaItemPage.module.css';

interface IModalConfig {
  mode: string;
  value?: string;
}

export function AgendaItemPage(): ReactElement {
  const [openedMenu, setOpenedMenu] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | null>('order');
  const [tabData, setTabData] = useState<IAgendaItemOrder[]>(tabsMock);
  const [modalConfig, setModalConfig] = useState<IModalConfig>({
    mode: '',
    value: '',
  });

  const [opened, { open, close }] = useDisclosure(false);

  function handlePrevious(): void {
    const previousIndex = openedMenu - 1;
    const newOpenedId: number =
      previousIndex === -1 ? menusMock.length - 1 : previousIndex;
    setOpenedMenu(newOpenedId);
  }

  function handleNext(): void {
    const nextIndex = openedMenu + 1;
    const newOpenedId: number =
      nextIndex > menusMock.length - 1 ? 0 : nextIndex;
    setOpenedMenu(newOpenedId);
  }

  const tabContent = (): ReactNode => {
    if (activeTab === 'details') {
      const activeTabData = tabData.find(
        (o) => o.id === menusMock[openedMenu].id,
      );
      const tabContent = activeTabData?.tabs.find((t) => t.id === activeTab)
        ?.content;

      if (tabContent) {
        const { title, description } = tabContent;
        return (
          <Stack>
            <Group>
              <h2>Titre :</h2>
              <h3>{title}</h3>
              <Button
                onClick={() => {
                  setModalConfig({
                    mode: 'title',
                    value: title,
                  });
                  open();
                }}
              >
                Modifier
              </Button>
            </Group>

            <Stack>
              <Group>
                <h2>Description : </h2>
                <Button
                  onClick={() => {
                    setModalConfig({
                      mode: 'description',
                      value: description,
                    });
                    open();
                  }}
                >
                  Modifier
                </Button>
              </Group>
              <p>{description}</p>
            </Stack>
          </Stack>
        );
      }

      return <h1>Details</h1>;
    }
    return tabData
      .find((o) => o.id === menusMock[openedMenu].id)
      ?.tabs.find((t) => t.id === activeTab)?.content.composent;
  };

  const handleConfirmModal = (): void => {
    const newTabData = tabData.map((order) => {
      if (order.id === menusMock[openedMenu].id) {
        return {
          ...order,
          tabs: order.tabs.map((tab) => {
            if (tab.id === activeTab) {
              return {
                ...tab,
                content: {
                  ...tab.content,
                  [modalConfig.mode]: modalConfig.value,
                },
              };
            }
            return tab;
          }),
        };
      }
      return order;
    });

    setTabData(newTabData);
    close();
  };

  return (
    <AppShell classNames={{ main: classes.main }} padding={0}>
      <AppShell.Main>
        <FoldableColumnLayout
          sidebarContent={
            <SidebarMenu<string>
              defaultSelectedId={menusMock[0].id}
              hasOnlyOneOpenMenu
              menu={menusMock}
              menuOpenValue={[menusMock[openedMenu].id]}
              onMenuOpenChange={() => setOpenedMenu(0)}
              onSelectedChange={(v?: string) => {
                const newIndex = menusMock.findIndex((menu) => menu.id === v);
                if (newIndex !== -1) {
                  setOpenedMenu(newIndex);
                }
              }}
              selectedValue={menusMock[openedMenu].id}
            />
          }
          sidebarToggleLabel={texts.toggleLabel}
          topBarRight={<Breadcrumbs>{...breadcrumbsMock}</Breadcrumbs>}
        >
          <div className={classes.box}>
            <Tabs onChange={setActiveTab} value={activeTab}>
              <Tabs.List>
                <Tabs.Tab value="order">{texts.order}</Tabs.Tab>
                <Tabs.Tab value="details">{texts.details}</Tabs.Tab>
                <Tabs.Tab value="conflicts">{texts.conflicts}</Tabs.Tab>
                <Tabs.Tab value="sends">{texts.sends}</Tabs.Tab>
                <Tabs.Tab value="pv">{texts.pv}</Tabs.Tab>
                <Tabs.Tab value="decisions">{texts.decisions}</Tabs.Tab>
                <Tabs.Tab value="history">{texts.history}</Tabs.Tab>
              </Tabs.List>
            </Tabs>
            <div className={classes.content}>{tabContent()}</div>
            <ConfirmModal
              cancelColor="red"
              confirmColor="black"
              onCancel={() => {
                setModalConfig({ ...modalConfig, value: '' });
                close();
              }}
              onClose={close}
              onConfirm={handleConfirmModal}
              opened={opened}
            >
              <h1>Modify {modalConfig.mode}</h1>
              <TextInput
                label={modalConfig.mode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setModalConfig({ ...modalConfig, value: e.target.value })
                }
                value={modalConfig.value}
              />
            </ConfirmModal>
            <div className={classes.pagination}>
              <Button onClick={handlePrevious}>{texts.previous}</Button>
              <Button onClick={handleNext}>{texts.next}</Button>
            </div>
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
