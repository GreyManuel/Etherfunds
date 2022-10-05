import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    Container,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import DarkModeSwitch from './DarkModeSwitch';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { useMetamask } from "use-metamask";
import { ethers } from 'ethers';

const Navbar = () => {

    const { connect, metaState } = useMetamask();

    const connectWallet = async() => {
        if (!metaState.isConnected) {
            
            try {
                await connect(ethers.providers.Web3Provider);
            } catch (error) {
                console.log(error);
            }
        }

        // console.log("Wallet connectred ");
    }
    
    return (
        <Box>
            <Flex
                color={useColorModeValue("gray.600", "white")}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                pos="fixed"
                top="0"
                w={"full"}
                minH={"60px"}
                boxShadow={"sm"}
                zIndex="999"
                justify={"center"}
                css={{
                    backdropFilter: "saturate(180%) blur(5px)",
                    backgroundColor: useColorModeValue(
                        "rgba(255, 255, 255, 0.8)",
                        "rgba(26, 32, 44, 0.8)"
                    ),
                }}
            >
                <Container as={Flex} maxW={"7xl"} align={"center"}>
                    <Flex flex={{ base: 1 }} justify="start" ml={{ base: -2, md: 0 }}>
                        <Heading
                            textAlign="left"
                            fontFamily={"heading"}
                            color={useColorModeValue("teal.800", "white")}
                            as="h2"
                            size="lg"
                        >
                            <Box
                                as={"span"}
                                color={useColorModeValue("teal.400", "teal.300")}
                                position={"relative"}
                                zIndex={10}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    w: "full",
                                    h: "30%",
                                    bg: useColorModeValue("teal.100", "teal.900"),
                                    zIndex: -1,
                                }}
                            >
                                {/* react royter <Link> will come here */}
                                <Link to="/">Etherfunds</Link>
                            </Box>
                        </Heading>
                    </Flex>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                        display={{ base: "none", md: "flex" }}
                    >
                        {metaState.isConnected ? null : 
                        
                            <Button
                                fontSize={"md"}
                                fontWeight={600}
                                variant={"link"}
                                display={{ base: "none", md: "inline-flex" }}
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </Button>
                        }

                        <Button
                            display={{ base: "none", md: "flex" }}
                            fontSize={"md"}
                            fontWeight={600}
                            color={"white"}
                            bg={"teal.400"}
                            // px={"30em"}
                            paddingLeft={"20px"}
                            paddingRight={"20px"}
                            _hover={{
                                bg: "teal.300",
                            }}
                            variant={"link"}
                        >
                            <Link to="/myfunds">My funds</Link>
                            
                        </Button>

                        <Button
                            display={{ base: "none", md: "flex" }}
                            fontSize={"md"}
                            fontWeight={600}
                            color={"white"}
                            bg={"teal.400"}
                            // px={"30em"}
                            paddingLeft={"20px"}
                            paddingRight={"20px"}
                            _hover={{
                                bg: "teal.300",
                            }}
                            variant={"link"}
                        >
                            <Link to="/mycontributions">My contributions</Link>
                            
                        </Button>

                        {/* <Button
                            fontSize={"md"}
                            fontWeight={600}
                            variant={"link"}
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <a href="/#howitworks"> How it Works</a>
                        </Button> */}

                        <DarkModeSwitch />
                    </Stack>
                    <Flex display={{ base: "flex", md: "none" }}>
                        <DarkModeSwitch />
                    </Flex>
                </Container>
            </Flex>
        </Box>
    );
};

export default Navbar;
