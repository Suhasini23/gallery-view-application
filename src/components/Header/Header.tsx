import React from "react";
import mainLogo from '../../assets/logo.png';
import SearchComponent from "../SearchComponent/SearchComponent";
import styled from "@emotion/styled";
import * as styles from "./__style";
const ImageWrapperDiv = styled.div(styles.__imageWrapper);
// @ts-ignore
const WrapperDiv = styled.div(styles.__wrapper);

const Header = (props: any) => {
    return <WrapperDiv>
        <ImageWrapperDiv>
            <img src={mainLogo} alt="logo" />
        </ImageWrapperDiv>
        <SearchComponent />
    </WrapperDiv>;
}
export default Header;