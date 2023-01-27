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

import { editUser, getAllUsers, deleteUser } from '../../redux/reducers/auth/thunkAction'

function ViewData({ isOpen, setIsOpen, data }) {

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
        setDetails({...data})
    }, [data])


    const [overlay, setOverlay] = useState(<OverlayOne />)

    const handleEdit = async () => {
        await dispatch(editUser(details)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                dispatch(getAllUsers())
                setIsOpen(false)
            }
        })
    }

    const handleDelete = async () => {
        await dispatch(deleteUser({ email: details.email })).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                dispatch(getAllUsers())
                setIsOpen(false)
            }
        })
    }



    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Add new user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            First name
                        </Text>
                        <Input
                            name='firstName'
                            value={details.firstName}
                            onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                            placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Last name
                        </Text>
                        <Input
                            name='lastName'
                            value={details.lastName}
                            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
                            placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Username
                        </Text>
                        <Input
                            name='usernamme'
                            value={details.username}
                            onChange={(e) => setDetails({ ...details, username: e.target.value })} placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'

                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Email
                        </Text>
                        <Input
                            name='email'
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            placeholder='Email' size='lg' />

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

export default ViewData