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
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import { useAppSelector } from '../../redux/store'
import { signUp, getAllUsers } from '../../redux/reducers/auth/thunkAction'


function AddUserModal({ isOpen, setIsOpen }) {

    const [role, setRole] = useState('')
    const [details, setDetails] = useState({});
    const dispatch = useDispatch();
    const { loading } = useAppSelector(({ authReducer }) => authReducer);


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const [overlay, setOverlay] = useState(<OverlayOne />)


    const handleAdd = async () => {
        await dispatch(signUp(details)).then(res => {
            if(res.meta.requestStatus === 'fulfilled'){
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
                        onChange={e => setDetails({...details, firstName: e.target.value})}
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
                        onChange={e => setDetails({...details, lastName: e.target.value})}
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
                        onChange={e => setDetails({...details, username: e.target.value})}
                        placeholder='First name' size='lg' />
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
                        onChange={e => setDetails({...details, email: e.target.value})}
                        placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Country
                        </Text>
                        <Input 
                        onChange={e => setDetails({...details, country: e.target.value})}
                        placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            State
                        </Text>
                        <Input 
                        onChange={e => setDetails({...details, state: e.target.value})}
                        placeholder='First name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Password
                        </Text>
                        <Input 
                        onChange={e => setDetails({...details, password: e.target.value})}
                        placeholder='First name' size='lg' />

                       
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleAdd}>
                            { loading === 'pending' ? <Spin /> : "Save"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddUserModal