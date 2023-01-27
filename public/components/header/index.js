import { VStack, Text, HStack, Image, Avatar, useMediaQuery } from "@chakra-ui/react";
import { usePage } from '../../components/context/usercontext'
import { useAppSelector } from "../../redux/store";

const Header = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const { page, setPage } = usePage();

    const { user } = useAppSelector(({ authReducer }) => authReducer);


    return (
        <HStack
            width='100%'
            justify='space-between'
            align='center'
            padding='30px'
            height='100px'
            borderBottom='0.5px solid #000'

        >
            <HStack justify='center' align='center' gap='40px'>
                <Image width='40px' src='/images/ligam.svg' />
                <HStack
                    borderRadius='40px'
                    height='40px'
                    onClick={() => setPage("Users")}
                    width='100px'
                    backgroundColor={page === 'Users' && 'rgba(0,0,0,0.3)'}
                    justify='center'
                    align='center'
                    cursor='pointer'
                >
                    <Text
                        fontFamily='Outfit'
                        color='#000'
                        fontWeight={500}
                        fontSize='17px'
                    >
                        Users
                    </Text>
                </HStack>
                <HStack
                cursor='pointer'
                    borderRadius='40px'
                    height='40px'
                    width='100px'
                    onClick={() => setPage("Products")}

                    backgroundColor={page === 'Products' && 'rgba(0,0,0,0.3)'}
                    justify='center'
                    align='center'
                >
                    <Text
                        fontFamily='Outfit'
                        color='#000'
                        fontWeight={500}
                        fontSize='17px'
                    >
                        Products
                    </Text>
                </HStack>
            </HStack>

            <HStack>
                <Avatar name='Dan Abrahmov' width='30px' height='30px' borderRadius='50%' src='https://bit.ly/dan-abramov' />
                {
                    isLargerThan600 && (
                        <Text
                            fontFamily='Outfit'
                            color='#000'
                            fontSize='20px'
                        >{user?.firstName } {user?.lastName}</Text>
                    )
                }
            </HStack>

        </HStack>

    )
}

export default Header