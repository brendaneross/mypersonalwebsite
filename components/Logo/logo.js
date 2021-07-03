import {Icon, useColorMode} from "@chakra-ui/react";
import utilStyles from '../../styles/utils.module.css';

export default function LogoIcon() {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
            colorMode === 'light' ?
            <Icon className={utilStyles.logo} viewBox="0 0 449 449">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect stroke="#131212" strokeWidth="10" fillOpacity="0.986492024" fill="#1B2344" x="67"
                          y="75" width="314" height="300"></rect>
                    <text fontFamily="AppleSDGothicNeo-Regular, Apple SD Gothic Neo" fontSize="200"
                          fontWeight="normal" fill="#FFFBFB">
                        <tspan x="134" y="285">br</tspan>
                    </text>
                </g>
            </Icon>
 :
            <Icon className={utilStyles.logo} viewBox="0 0 449 449">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect stroke="#131212" strokeWidth="10" fill="#FFFFFF" x="67" y="75" width="314" height="300"></rect>
                    <text fontFamily="AppleSDGothicNeo-Regular, Apple SD Gothic Neo" fontSize="200" fontWeight="normal" fill="#1B2344" fillOpacity="0.986492024">
                        <tspan x="134" y="285">br</tspan>
                    </text>
                </g>
             </Icon>
    )
}
