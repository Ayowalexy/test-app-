import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ViewData from '../modals/view';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/reducers/auth/thunkAction';


const UserTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const { allUsers } = useAppSelector(({ authReducer }) => authReducer);


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            allUsers?.map(element => (
                                <Tr>
                                    <Td>{element.firstName} {element.lastName}</Td>
                                    <Td>{element.email}</Td>
                                    <Td>Active</Td>
                                    <Td cursor='pointer' onClick={() => {
                                        setUser(element)
                                        setIsOpen(true)
                                    }}>View</Td>
                                </Tr>
                            ))
                        }


                    </Tbody>

                </Table>
            </TableContainer>
            <ViewData
                data={user}
                isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default UserTable