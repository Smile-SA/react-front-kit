'use client';

import type { ReactElement } from 'react';

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Grid,
  Group,
  Image,
  Indicator,
  Stack,
  Text,
} from '@mantine/core';
import {
  Bell,
  DownloadSimple,
  Export,
  Eye,
  Folder,
  Note,
  UserCircle,
} from '@phosphor-icons/react';
import {
  CardHeader,
  CardList,
  DataBadge,
  IconCard,
  SummaryBox,
} from '@smile/react-front-kit';

// eslint-disable-next-line react-refresh/only-export-components
export const iconCardMock = {
  children: (
    <p
      style={{
        cursor: 'pointer',
        display: 'flex',
        fontWeight: 600,
        margin: '0 auto',
        verticalAlign: 'center',
        width: 'fit-content',
      }}
    >
      <Eye size={18} style={{ margin: 'auto 10px auto 0' }} weight="bold" />
      View more
    </p>
  ),
  icon: (
    <div
      style={{
        background: 'white',
        borderRadius: '100px',
        height: '64px',
        margin: '0 auto',
        padding: '16px',
        width: '64px',
      }}
    >
      <Note color="#0B7285" size={32} weight="light" />
    </div>
  ),
  subTitle: 'sub-title',
  title: 'My documents',
};

const header = (
  title = 'Element de text',
  subTitle = 'sous-titre',
  icon = <Note size={38} style={{ marginTop: '12px' }} weight="thin" />,
): ReactElement => {
  return (
    <CardHeader leftSection={icon}>
      <>
        <h2 style={{ fontSize: '18px', margin: 0 }}>{title}</h2>
        <p style={{ margin: '0' }}>{subTitle}</p>
      </>
    </CardHeader>
  );
};

const seeMore = (
  <CardSection p="0px 32px 32px 32px">
    <Button fullWidth>Voir plus</Button>
  </CardSection>
);

const avatar = (
  <Indicator color="red" inline offset={8} withBorder>
    <Avatar size={40}>
      <UserCircle size={40} />
    </Avatar>
  </Indicator>
);

const notificationContent = (name = 'Simon Leclerc'): ReactElement => {
  return (
    <span>
      <strong>{name} </strong>
      <span>
        dolor sit amet consectetur. Sollicitudin mattis blandit aliquet odio
        urna mi id :
      </span>
      <Text c="cyan" component="span">
        Lorem Ipsum dolor
      </Text>
    </span>
  );
};

const notificationTop = (text = 'Il y a 3h'): ReactElement => {
  return <span>{text}</span>;
};

const cardListNotifications = (button = true): ReactElement => {
  return (
    <Card radius={16}>
      <Card.Section>
        {header(
          'Notifications',
          undefined,
          <Bell size={38} style={{ marginTop: '12px' }} weight="thin" />,
        )}
      </Card.Section>
      <Card.Section>
        <CardList h="565px">
          <SummaryBox leftNode={avatar} topNode={notificationTop()}>
            {notificationContent()}
          </SummaryBox>
          <SummaryBox leftNode={avatar} topNode={notificationTop('Avant-hier')}>
            {notificationContent('Marie Dupont')}
          </SummaryBox>
          <SummaryBox
            leftNode={avatar}
            topNode={notificationTop('Le 08 décembre 2023')}
          >
            {notificationContent('Vincent Le Grand')}
          </SummaryBox>
          <SummaryBox leftNode={avatar}>
            {notificationContent('Robert Maxwell')}
          </SummaryBox>
          <SummaryBox
            leftNode={avatar}
            titleNode={notificationContent('Jamie Marcel')}
            topNode={notificationTop('Le 01 décembre 2023')}
          />
          <SummaryBox
            leftNode={avatar}
            topNode={notificationTop('Le 27 Novembre 2023')}
          >
            {notificationContent('Robert De Fino')}
          </SummaryBox>
        </CardList>
      </Card.Section>
      {button ? seeMore : null}
    </Card>
  );
};
const cardListUploadItem = (
  text = 'Ma carte de tiers payant',
): ReactElement => {
  return (
    <SummaryBox
      rightNode={
        <ActionIcon color="cyan" size={30} variant="subtle">
          <DownloadSimple size={24} />
        </ActionIcon>
      }
      titleNode={<strong>{text}</strong>}
    />
  );
};
const cardListUpload = (
  <Card radius={16}>
    <Card.Section>
      {header(
        'Mes documents',
        undefined,
        <Folder size={38} style={{ marginTop: '12px' }} weight="thin" />,
      )}
    </Card.Section>
    <Card.Section>
      <CardList>
        {cardListUploadItem()}
        {cardListUploadItem('Ma facture du 12/12/23')}
        {cardListUploadItem('Mon attestation de domicile')}
      </CardList>
    </Card.Section>
  </Card>
);
const contentCard = (
  <Text color="dark.3" mb="10px" size="14px">
    Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
    odio urna mi id. Mauris venenatis ut et at amet vel est.
  </Text>
);

const cardSimple = (
  <Card padding={0} radius="lg" shadow="sm" withBorder>
    <Card.Section>
      <Image alt="Norway" height={246} src="https://picsum.photos/1301" />
    </Card.Section>
    <Card.Section m="32px">
      <SummaryBox
        titleNode="Lorem ipsum dolor sit amet"
        topNode={<Text style={{ fontSize: '12px' }}>Le 30 novembre 2023</Text>}
      >
        <>
          {contentCard}
          <Group>
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="67px"
            >
              tag
            </Badge>
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="67px"
            >
              tag
            </Badge>
          </Group>
        </>
      </SummaryBox>
    </Card.Section>
  </Card>
);
const cardListItem = (
  index: number,
  date: string,
  badge = (
    <Badge
      color="gray"
      p="16px"
      size="lg"
      style={{ textTransform: 'lowercase' }}
      variant="light"
      w="98px"
    >
      Validé
    </Badge>
  ),
): ReactElement => {
  return (
    <SummaryBox
      titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
      topNode={<Text style={{ fontSize: '12px' }}>{date}</Text>}
    >
      <>
        {contentCard}
        <Flex key={index} style={{ width: '100%' }}>
          <Flex justify="space-between" style={{ width: '100%' }}>
            {badge}
            <Flex align="center" gap={16}>
              <ActionIcon color="cyan" size={30} variant="subtle">
                <Export size={24} />
              </ActionIcon>
              <ActionIcon color="cyan" size={30} variant="subtle">
                <Eye size={24} />
              </ActionIcon>
            </Flex>
          </Flex>
        </Flex>
      </>
    </SummaryBox>
  );
};
const cardList = (button = true): ReactElement => {
  return (
    <Card radius={16}>
      <Card.Section>{header()}</Card.Section>
      <Card.Section>
        <CardList h="565px">
          {cardListItem(
            0,
            'Le 30 novembre 2023',
            <Badge
              color="green"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              Validé
            </Badge>,
          )}
          {cardListItem(
            1,
            'Le 24 novembre 2023',
            <Badge
              color="orange.8"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En cours
            </Badge>,
          )}
          {cardListItem(
            2,
            'Le 23 novembre 2023',
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En pause
            </Badge>,
          )}
          {cardListItem(
            0,
            'Le 18 novembre 2023',
            <Badge
              color="green"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              Validé
            </Badge>,
          )}
          {cardListItem(
            1,
            'Le 16 novembre 2023',
            <Badge
              color="orange.8"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En cours
            </Badge>,
          )}
          {cardListItem(
            2,
            'Le 8 novembre 2023',
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En pause
            </Badge>,
          )}
        </CardList>
      </Card.Section>
      {button ? seeMore : null}
    </Card>
  );
};

const cardDataBadge = (
  <Card radius={16}>
    <Card.Section>{header()}</Card.Section>
    <Card.Section m="32px 16px 16px">
      <DataBadge color="cyan" number={48} size="lg">
        EN COURS DE CANDIDATURE
      </DataBadge>
    </Card.Section>
    <Card.Section m="0 30px 18px 30px">
      <Grid mx="auto">
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={18}>EN COURS DE CANDIDATURE</DataBadge>
        </Grid.Col>
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={12}>en cours de consultation</DataBadge>
        </Grid.Col>
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={26}>en cours de signature</DataBadge>
        </Grid.Col>
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={11}>en cours de procédure</DataBadge>
        </Grid.Col>
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={0}>terminé/signé</DataBadge>
        </Grid.Col>
        <Grid.Col p="5px 10px" span={{ base: 12, xs: 6 }}>
          <DataBadge number={3}>clôturé</DataBadge>
        </Grid.Col>
      </Grid>
    </Card.Section>
  </Card>
);

export function DashboardPage(): ReactElement {
  return (
    <Grid maw="1480px" mx="auto">
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        <Stack>
          {cardSimple}
          {cardListUpload}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>{cardList()}</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications()}
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>{cardList(false)}</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications(false)}
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardDataBadge}
        <IconCard
          icon={iconCardMock.icon}
          mt="16px"
          subTitle={iconCardMock.subTitle}
          title={iconCardMock.title}
          w="50%"
        >
          {iconCardMock.children}
        </IconCard>
      </Grid.Col>
    </Grid>
  );
}
