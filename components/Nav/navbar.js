import { ReactNode } from 'react';
import utilStyles from '../../styles/utils.module.css';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Toggle from '../Toggle/toggle'
import Logo from '../Logo/logo'

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Links = ['Projects', 'Posts'];

    return (
        <>
            <Box className={utilStyles.navBar} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} justifyContent={'flex-end'}>
                        <Link href="/">
                            <a><Logo /></a>
                        </Link>
                        <Flex alignItems={'center'}
                              display={{ md: 'block', sm: 'none' }}
                        >
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </Flex>
                        <Flex alignItems={'center'}
                              display={{ md: 'block', sm: 'none' }}
                        >
                            <Link href="/posts">
                                <a>Blog</a>
                            </Link>
                        </Flex>
                    </HStack>
                    {/*<Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    */}
                    <Toggle />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link key={link} href={'/' + link.toLowerCase()}>{link}</Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}