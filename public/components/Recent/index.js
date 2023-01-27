import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import UserTable from './userTable'
import ProductTable from './productTable'

const Recent = () => {
    return (
        <Tabs
            width='100%'
        >
            <TabList>
                <Tab>Users</Tab>
                <Tab>Products</Tab>
            </TabList>

            <TabPanels width='100%'> 
                <TabPanel>
                   <UserTable />
                </TabPanel>
                <TabPanel>
                    <ProductTable />
                </TabPanel>
                
            </TabPanels>
        </Tabs>
    )
}

export default Recent