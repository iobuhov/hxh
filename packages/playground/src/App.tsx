import { useState } from "react";
import {
    AppShell,
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
    Flex,
    ActionIcon,
    Tooltip
} from "@mantine/core";
import { AreaChart, BarChart } from "@mantine/charts";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    Settings,
    ChevronDown,
    TrendingUp,
    TrendingDown,
    CreditCard,
    Zap,
    DollarSign,
    PanelLeft,
    PanelLeftClose
} from "lucide-react";

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
    { month: "Dec", revenue: 7200, subscriptions: 4600 }
];

const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
    { name: "William Kim", email: "william.kim@email.com", amount: "+$99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" }
];

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: ShoppingCart, label: "Orders", badge: "6" },
    { icon: Package, label: "Products" },
    { icon: Users, label: "Customers" },
    { icon: Settings, label: "Settings" }
];

function DashboardPage() {
    return (
        <Stack gap="md">
            <Title order={2}>Dashboard</Title>

            {/* Stats Cards */}
            <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
                <Card withBorder shadow="sm" radius="md" padding="lg">
                    <Group justify="space-between" mb="xs">
                        <Text size="sm" c="dimmed" fw={500}>
                            Total Revenue
                        </Text>
                        <ThemeIcon variant="light" size="sm" color="gray">
                            <DollarSign size={14} />
                        </ThemeIcon>
                    </Group>
                    <Text fw={700} size="xl">
                        $45,231.89
                    </Text>
                    <Group gap={4} mt={4}>
                        <TrendingUp size={14} color="var(--mantine-color-teal-6)" />
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
                            <Users size={14} />
                        </ThemeIcon>
                    </Group>
                    <Text fw={700} size="xl">
                        +2,350
                    </Text>
                    <Group gap={4} mt={4}>
                        <TrendingUp size={14} color="var(--mantine-color-teal-6)" />
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
                            <CreditCard size={14} />
                        </ThemeIcon>
                    </Group>
                    <Text fw={700} size="xl">
                        +12,234
                    </Text>
                    <Group gap={4} mt={4}>
                        <TrendingDown size={14} color="var(--mantine-color-red-6)" />
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
                            <Zap size={14} />
                        </ThemeIcon>
                    </Group>
                    <Text fw={700} size="xl">
                        +573
                    </Text>
                    <Group gap={4} mt={4}>
                        <TrendingUp size={14} color="var(--mantine-color-teal-6)" />
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
                        {recentSales.map(sale => (
                            <Flex key={sale.email} justify="space-between" align="center">
                                <Group gap="sm">
                                    <Avatar size="md" radius="xl" color="blue">
                                        {sale.name
                                            .split(" ")
                                            .map(n => n[0])
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
    );
}

function OrdersPage() {
    return (
        <Stack gap="md">
            <Title order={2}>Orders</Title>
            <Card withBorder shadow="sm" radius="md" padding="lg">
                <Text size="lg" fw={500} mb="md">
                    Recent Orders
                </Text>
                <Text c="dimmed">Orders page content coming soon...</Text>
            </Card>
        </Stack>
    );
}

function ProductsPage() {
    return (
        <Stack gap="md">
            <Title order={2}>Products</Title>
            <Card withBorder shadow="sm" radius="md" padding="lg">
                <Text size="lg" fw={500} mb="md">
                    Product Catalog
                </Text>
                <Text c="dimmed">Products page content coming soon...</Text>
            </Card>
        </Stack>
    );
}

function CustomersPage() {
    return (
        <Stack gap="md">
            <Title order={2}>Customers</Title>
            <Card withBorder shadow="sm" radius="md" padding="lg">
                <Text size="lg" fw={500} mb="md">
                    Customer Management
                </Text>
                <Text c="dimmed">Customers page content coming soon...</Text>
            </Card>
        </Stack>
    );
}

function SettingsPage() {
    return (
        <Stack gap="md">
            <Title order={2}>Settings</Title>
            <Card withBorder shadow="sm" radius="md" padding="lg">
                <Text size="lg" fw={500} mb="md">
                    Application Settings
                </Text>
                <Text c="dimmed">Settings page content coming soon...</Text>
            </Card>
        </Stack>
    );
}

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState(0);

    const renderContent = () => {
        switch (active) {
            case 0:
                return <DashboardPage />;
            case 1:
                return <OrdersPage />;
            case 2:
                return <ProductsPage />;
            case 3:
                return <CustomersPage />;
            case 4:
                return <SettingsPage />;
            default:
                return <DashboardPage />;
        }
    };

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: collapsed ? 60 : 260,
                breakpoint: "sm"
            }}
            padding="md"
            styles={{
                navbar: {
                    transition: "none"
                },
                main: {
                    transition: "none"
                }
            }}
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Group>
                        <ActionIcon variant="subtle" color="gray" onClick={() => setCollapsed(!collapsed)} size="lg">
                            {collapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
                        </ActionIcon>
                        <Title order={4} fw={700}>
                            Acme Inc
                        </Title>
                    </Group>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <UnstyledButton>
                                <Group gap="xs">
                                    <Avatar
                                        size="sm"
                                        radius="xl"
                                        src="https://fastly.picsum.photos/id/870/600/600.jpg?hmac=sCIBRNG3i4SdbEGKuJjCdD3vLG-hVFEtE4oD3T4JEqY"
                                    />
                                    <Text size="sm" visibleFrom="sm">
                                        Francheska
                                    </Text>
                                    <ChevronDown size={16} />
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
            </AppShell.Header>

            <AppShell.Navbar p="xs">
                <Stack gap={4}>
                    {navItems.map((item, index) =>
                        collapsed ? (
                            <Tooltip key={item.label} label={item.label} position="right" withArrow>
                                <NavLink
                                    active={index === active}
                                    label=""
                                    leftSection={<item.icon size={20} />}
                                    onClick={() => setActive(index)}
                                    variant="filled"
                                />
                            </Tooltip>
                        ) : (
                            <NavLink
                                key={item.label}
                                active={index === active}
                                label={item.label}
                                leftSection={<item.icon size={20} />}
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
                        )
                    )}
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>{renderContent()}</AppShell.Main>
        </AppShell>
    );
}

export default App;
