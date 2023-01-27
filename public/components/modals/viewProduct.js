import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Input,
    HStack
} from '@chakra-ui/react'
import { Spin } from 'antd'
import { useState, useEffect } from 'react'
import { useAppSelector } from '../../redux/store'
import { useDispatch } from 'react-redux'

import { getProducts, getAllUsers, deleteUser, editProduct, deleteProduct } from '../../redux/reducers/auth/thunkAction'

function ViewDataProduct({ isOpen, setIsOpen, data }) {

    const [role, setRole] = useState('')
    const dispatch = useDispatch();

    const [details, setDetails] = useState({})
    const { loading, isLoading } = useAppSelector(({ authReducer }) => authReducer);

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    useEffect(() => {
        setDetails({ ...data })
    }, [data])


    const [overlay, setOverlay] = useState(<OverlayOne />)

    const handleEdit = async () => {
        await dispatch(editProduct(details)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                dispatch(getProducts())
                setIsOpen(false)
            }
        })
    }

    const handleDelete = async () => {
        await dispatch(deleteProduct({ name: details.name })).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                dispatch(getProducts())
                setIsOpen(false)
            }
        })
    }



    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Name
                        </Text>
                        <Input
                            name='name'
                            value={details.name}
                            onChange={(e) => setDetails({ ...details, name: e.target.value })} placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Price
                        </Text>
                        <Input
                            name='price'
                            value={details.price}
                            onChange={(e) => setDetails({ ...details, price: e.target.value })}
                            placeholder='price' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Category
                        </Text>
                        <Input
                            name='category'
                            value={details.category}
                            onChange={(e) => setDetails({ ...details, category: e.target.value })}
                            placeholder='price' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Description
                        </Text>
                        <Input
                            name='description'
                            value={details.description}
                            onChange={(e) => setDetails({ ...details, description: e.target.value })}
                            placeholder='price' size='lg' />

                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Action
                        </Text>
                        <HStack width='100%' >
                            <HStack
                                width='50%'
                                height='40px'
                                onClick={handleDelete}
                                backgroundColor={'#DE8E0E'}
                                align='center'
                                justify='center'
                            >
                                {
                                    isLoading === 'pending' ? <Spin /> : (
                                        <Text
                                            fontWeight={300}
                                            fontSize='15px'
                                            fontFamily='Outfit'
                                            color='#000'
                                        >Delete</Text>
                                    )
                                }
                            </HStack>
                            <HStack
                                width='50%'
                                height='40px'
                                onClick={handleEdit}
                                backgroundColor={'#DE8E0E'}
                                align='center'
                                justify='center'
                            >
                                {
                                    loading === 'pending' ? <Spin /> : (
                                        <Text
                                            fontWeight={300}
                                            fontSize='15px'
                                            fontFamily='Outfit'
                                            color='#000'
                                        >Edit</Text>
                                    )
                                }
                            </HStack>
                        </HStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClose={() => setIsOpen(!isOpen)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ViewDataProduct