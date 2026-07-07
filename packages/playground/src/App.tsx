import { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Title,
  Text,
  Card,
  SimpleGrid,
  Stack,
  Avatar,
  Menu,
  UnstyledButton,
  ThemeIcon,
  Badge,
  Table,
  Progress,
  Flex,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AreaChart, BarChart } from "@mantine/charts";
import {
  IconDashboard,
  IconShoppingCart,
  IconPackage,
  IconUsers,
  IconSettings,
  IconChevronDown,
  IconTrendingUp,
  IconTrendingDown,
  IconCreditCard,
  IconActivity,
  IconCurrencyDollar,
} from "@tabler/icons-react";

const revenueData = [
  { month: "Jan", revenue: 2400, subscriptions: 1800 },
  { month: "Feb", revenue: 1398, subscriptions: 2200 },
  { month: "Mar", revenue: 9800, subscriptions: 2800 },
  { month: "Apr", revenue: 3908, subscriptions: 2600 },
  { month: "May", revenue: 4800, subscriptions: 3200 },
  { month: "Jun", revenue: 3800, subscriptions: 3600 },
  { month: "Jul", revenue: 4300, subscriptions: 3100 },
  { month: "Aug", revenue: 5200, subscriptions: 3400 },
  { month: "Sep", revenue: 4100, subscriptions: 2900 },
  { month: "Oct", revenue: 6300, subscriptions: 4200 },
  { month: "Nov", revenue: 5900, subscriptions: 3800 },
  { month: "Dec", revenue: 7200, subscriptions: 4600 },
];

const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
  { name: "William Kim", email: "william.kim@email.com", amount: "+$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
];

const navItems = [
  { icon: IconDashboard, label: "Dashboard", active: true },
  { icon: IconShoppingCart, label: "Orders", badge: "6" },
  { icon: IconPackage, label: "Products" },
  { icon: IconUsers, label: "Customers" },
  { icon: IconSettings, label: "Settings" },
];

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={4} fw={700}>
              Acme Inc
            </Title>
          </Group>
          <Group>
            <Select
              placeholder="Search..."
              data={["Dashboard", "Orders", "Products", "Settings"]}
              searchable
              w={200}
              size="sm"
              visibleFrom="sm"
            />
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap="xs">
                    <Avatar size="sm" radius="xl" color="blue">
                      CN
                    </Avatar>
                    <Text size="sm" visibleFrom="sm">
                      shadcn
                    </Text>
                    <IconChevronDown size={14} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Profile</Menu.Item>
                <Menu.Item>Billing</Menu.Item>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red">Log out</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs">
        <Stack gap={4}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.label}
              active={index === active}
              label={item.label}
              leftSection={<item.icon size={20} stroke={1.5} />}
              rightSection={
                item.badge ? (
                  <Badge size="xs" variant="filled" color="red">
                    {item.badge}
                  </Badge>
                ) : undefined
              }
              onClick={() => setActive(index)}
              variant="filled"
            />
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="md">
          <Group justify="space-between">
            <Title order={2}>Dashboard</Title>
            <Select
              data={["Last 7 days", "Last 30 days", "Last 3 months", "Last 12 months"]}
              defaultValue="Last 30 days"
              size="xs"
              w={160}
            />
          </Group>

          {/* Stats Cards */}
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Total Revenue
                </Text>
                <ThemeIcon variant="light" size="sm" color="gray">
                  <IconCurrencyDollar size={14} />
                </ThemeIcon>
              </Group>
              <Text fw={700} size="xl">
                $45,231.89
              </Text>
              <Group gap={4} mt={4}>
                <IconTrendingUp size={14} color="var(--mantine-color-teal-6)" />
                <Text size="xs" c="teal">
                  +20.1% from last month
                </Text>
              </Group>
            </Card>

            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Subscriptions
                </Text>
                <ThemeIcon variant="light" size="sm" color="gray">
                  <IconUsers size={14} />
                </ThemeIcon>
              </Group>
              <Text fw={700} size="xl">
                +2,350
              </Text>
              <Group gap={4} mt={4}>
                <IconTrendingUp size={14} color="var(--mantine-color-teal-6)" />
                <Text size="xs" c="teal">
                  +180.1% from last month
                </Text>
              </Group>
            </Card>

            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Sales
                </Text>
                <ThemeIcon variant="light" size="sm" color="gray">
                  <IconCreditCard size={14} />
                </ThemeIcon>
              </Group>
              <Text fw={700} size="xl">
                +12,234
              </Text>
              <Group gap={4} mt={4}>
                <IconTrendingDown size={14} color="var(--mantine-color-red-6)" />
                <Text size="xs" c="red">
                  -2.3% from last month
                </Text>
              </Group>
            </Card>

            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Active Now
                </Text>
                <ThemeIcon variant="light" size="sm" color="gray">
                  <IconActivity size={14} />
                </ThemeIcon>
              </Group>
              <Text fw={700} size="xl">
                +573
              </Text>
              <Group gap={4} mt={4}>
                <IconTrendingUp size={14} color="var(--mantine-color-teal-6)" />
                <Text size="xs" c="teal">
                  +201 since last hour
                </Text>
              </Group>
            </Card>
          </SimpleGrid>

          {/* Charts and Recent Sales */}
          <SimpleGrid cols={{ base: 1, lg: 2 }}>
            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Text fw={600} mb="xs">
                Overview
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                Monthly revenue for the current year
              </Text>
              <BarChart
                h={300}
                data={revenueData}
                dataKey="month"
                series={[{ name: "revenue", color: "blue.6" }]}
                tickLine="y"
                gridAxis="y"
              />
            </Card>

            <Card withBorder shadow="sm" radius="md" padding="lg">
              <Text fw={600} mb="xs">
                Recent Sales
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                You made 265 sales this month.
              </Text>
              <Stack gap="md">
                {recentSales.map((sale) => (
                  <Flex key={sale.email} justify="space-between" align="center">
                    <Group gap="sm">
                      <Avatar size="md" radius="xl" color="blue">
                        {sale.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <div>
                        <Text size="sm" fw={500}>
                          {sale.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {sale.email}
                        </Text>
                      </div>
                    </Group>
                    <Text size="sm" fw={600}>
                      {sale.amount}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Bottom section - subscriptions chart */}
          <Card withBorder shadow="sm" radius="md" padding="lg">
            <Text fw={600} mb="xs">
              Subscriptions Over Time
            </Text>
            <Text size="sm" c="dimmed" mb="md">
              Showing total subscribers growth for the last 12 months
            </Text>
            <AreaChart
              h={200}
              data={revenueData}
              dataKey="month"
              series={[{ name: "subscriptions", color: "indigo.6" }]}
              curveType="natural"
              gridAxis="y"
              tickLine="y"
            />
          </Card>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
