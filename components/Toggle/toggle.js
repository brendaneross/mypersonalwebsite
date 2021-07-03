import { useColorMode } from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {IconButton} from "@chakra-ui/react";
import {SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    const textColor = { light: 'blue.800', dark: 'white' };
    return (
        <div>
                <IconButton
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    color={textColor[colorMode]}
                />
        </div>
    )
}