import styles from "./page.module.css";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ReposList from "@/screens/ReposList";
import Favorites from "@/screens/Favorites";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import usePrefetchQueries from "@/hooks/usePrefetchQueries";
import Container from "@/components/Container";

export default async function Home() {
  const queryClient = new QueryClient();
  await usePrefetchQueries(queryClient);

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Container>
          <Tabs position="relative" variant="unstyled" width="100%">
            <TabList justifyContent="flex-start" width="100%">
              <Tab fontWeight="bold" fontSize={18}>
                Popular Repos!
              </Tab>
              <Tab fontWeight="bold" fontSize={18}>
                Favorites
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels width="100%">
              <TabPanel>
                <ReposList />
              </TabPanel>
              <TabPanel>
                <Favorites />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </HydrationBoundary>
    </main>
  );
}
