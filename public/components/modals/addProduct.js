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
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/store'
import { addProduct, getProducts } from '../../redux/reducers/auth/thunkAction'

function AddProductModal({ isOpen, setIsOpen }) {

    const [details, setDetails] = useState({})

    const [role, setRole] = useState('')
    const dispatch = useDispatch();
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const { loading } = useAppSelector(({ authReducer }) => authReducer);


    const [overlay, setOverlay] = useState(<OverlayOne />)


    const handleAdd = async () => {
        await dispatch(addProduct(details)).then(res => {
            if(res.meta.requestStatus === 'fulfilled'){
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
                    <ModalHeader>Add new product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Product name
                        </Text>
                        <Input
                            onChange={e => setDetails({ ...details, name: e.target.value })}
                            placeholder='Product name' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Product price
                        </Text>
                        <Input
                            onChange={e => setDetails({ ...details, price: e.target.value })}

                            placeholder='Product price' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Product category
                        </Text>
                        <Input
                            onChange={e => setDetails({ ...details, category: e.target.value })}

                            placeholder='Product category' size='lg' />
                        <Text
                            fontWeight={600}
                            fontSize='20px'
                            marginTop='20px'
                            fontFamily='Outfit'
                            color='#000'
                        >
                            Product description
                        </Text>
                        <Input
                            onChange={e => setDetails({ ...details, description: e.target.value })}

                            placeholder='Product description' size='lg' />

                        
                          
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleAdd}>
                            { loading === 'pending' ? <Spin /> : 'Save'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddProductModal