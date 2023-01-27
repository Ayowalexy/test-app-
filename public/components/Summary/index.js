import { HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillPlusCircle } from 'react-icons/ai'
import Recent from "../Recent";
import AddUserModal from "../modals/addUser";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, getProducts } from "../../redux/reducers/auth/thunkAction";
import { useAppSelector } from "../../redux/store";
import { usePage } from "../context/usercontext";
import AddProductModal from "../modals/addProduct";

const Summary = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { page } = usePage();
    const { allProducts, allUsers } = useAppSelector(({ authReducer }) => authReducer);

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getProducts())
    }, [])

    const data = [
        {
            type: "Number of users",
            value: allUsers?.length
        },
        {
            type: "Number of products",
            value: allProducts?.length
        },
    ]

    return (
        <VStack align='flex-start'>
            <HStack
                width='100%'
                justify='space-between'
                align={{ base: 'flex-start', md: 'center', lg: 'center' }}
                padding='30px'
                flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                borderBottom='0.5px solid rgba(0,0,0,0.2)'
            >
                {
                    page === 'Users' && (
                        <VStack align='flex-start' justify='center'  >
                            <Text
                                fontWeight={600}
                                fontSize='50px'
                                marginBottom='-12px'
                                fontFamily='Outfit'
                                color='#000'
                            >User</Text>
                            <Text
                                fontWeight={300}
                                fontSize='14px'
                                fontFamily='Outfit'
                                color='#000'
                            >{allUsers?.length} users</Text>
                        </VStack>
                    )
                }

                {
                    page === 'Products' && (
                        <VStack align='flex-start' justify='center'  >
                            <Text
                                fontWeight={600}
                                fontSize='50px'
                                marginBottom='-12px'
                                fontFamily='Outfit'
                                color='#000'
                            >Pruducts</Text>
                            <Text
                                fontWeight={300}
                                fontSize='14px'
                                fontFamily='Outfit'
                                color='#000'
                            >{allProducts?.length} products</Text>
                        </VStack>
                    )
                }
                <HStack
                    width={{ base: '100%', md: '200px', lg: '200px' }}
                    borderRadius='5px'
                    align='center'
                    height='40px'
                    justify='center'
                    onClick={() => {
                        if (page === 'Users') {
                            setIsOpen(true)
                        } else {
                            setOpen(true)
                        }
                    }}
                    backgroundColor='#DE8E0E'
                >
                    <AiFillPlusCircle />
                    <Text
                        fontWeight={400}
                        fontSize='18px'
                        fontFamily='Outfit'
                        color='#000'
                    >Add {page === 'Users' ? 'user' : 'product'}</Text>
                </HStack>
            </HStack>

            <VStack width='100%' padding='30px' align='flex-start' borderBottom='0.5px solid rgba(0,0,0,0.2)'
            >
                <Text
                    fontWeight={400}
                    fontSize='18px'
                    fontFamily='Outfit'
                    color='#000'
                >Summer</Text>

                <HStack gap='30px' flexDir={{ base: 'column', md: 'row', lg: 'row' }} width='100%'>
                    {
                        data.splice(data.length - 2, ).map(element => (
                            <HStack
                                key={element.value}
                                height='100px'
                                width={{ base: '100%', md: '300px', lg: '300px' }}
                                borderRadius='15px'
                                border='1px solid #DE8E0E'
                                justify='flex-start'
                                paddingLeft='20px'
                                align='center'

                            >
                                <HStack
                                    height='50px'
                                    width='50px'
                                    justify='center'
                                    align='center'
                                    borderRadius='5px'
                                    backgroundColor='rgba(222, 142, 14, 0.3)'

                                >
                                    <AiFillPlusCircle size='30px' />
                                </HStack>
                                <VStack spacing='-10px' align='flex-start' justify='flex-start'>
                                    <Text
                                        fontWeight={300}
                                        fontSize='18px'
                                        marginTop='-7px'
                                        fontFamily='Outfit'
                                        color='#000'
                                    >{element.type}</Text>
                                    <Text
                                        fontWeight={500}
                                        fontSize='25px'
                                        fontFamily='Outfit'
                                        color='#000'
                                    >{element.value}</Text>
                                </VStack>
                            </HStack>
                        ))
                    }
                </HStack>
            </VStack>

            <VStack width='100%' padding='30px' align='flex-start' borderBottom='0.5px solid rgba(0,0,0,0.2)'>
                <Text
                    fontWeight={400}
                    fontSize='18px'
                    fontFamily='Outfit'
                    color='#000'
                >Recent Activities</Text>
                <Recent />
            </VStack>

            <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <AddProductModal isOpen={open} setIsOpen={setOpen} />

        </VStack>
    )
}

export default Summary