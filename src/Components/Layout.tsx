import {AppShell, Group, rem, Text} from '@mantine/core';
import {useHeadroom} from '@mantine/hooks';
import {MantineLogo} from '@mantinex/mantine-logo';
import Menu from '../Components/Menu';
import React, {FC} from "react";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: FC<LayoutProps> = ({children}) => {
    const pinned = useHeadroom({fixedAt: 120});

    return (
        <AppShell header={{height: 60, collapsed: !pinned, offset: false}} padding="md">
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <MantineLogo size={30}/>
                    <Menu/>
                </Group>
            </AppShell.Header>

            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>

                <Text size="lg" my="md" maw={600} mx="auto">
                    {children}
                </Text>
            </AppShell.Main>
        </AppShell>
    );
}

export default Layout;