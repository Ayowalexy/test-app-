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
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import { getProducts } from '../../redux/reducers/auth/thunkAction';
import ViewDataProduct from '../modals/viewProduct';


const ProductTable = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({})
    const { allProducts } = useAppSelector(({ authReducer }) => authReducer);


    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th>Category</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            allProducts?.map(element => (
                                <Tr>
                                    <Td>{element.name}</Td>
                                    <Td>{element.price}</Td>
                                    <Td>{element.category}</Td>
                                    <Td cursor='pointer' onClick={() => {
                                        setProduct(element)
                                        setIsOpen(true)
                                    }}>View</Td>
                                </Tr>
                            ))
                        }


                    </Tbody>

                </Table>
            </TableContainer>
            <ViewDataProduct
                data={product} 
                isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default ProductTable