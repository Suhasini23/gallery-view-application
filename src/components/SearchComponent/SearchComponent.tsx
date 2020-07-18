import React, { useState } from "react";
import searchLogo from '../../assets/search.png';
import styled from "@emotion/styled";
import * as styles from "./__styles";
const SearchInput = styled.input(styles.__searchInput);
const WrapperDiv = styled.div(styles.__wrapper);

const SearchComponent = (props: any) => {
    const [searchText, setSearchText] = useState("")

    const __handleOnChange = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        e.persist();
        setSearchText(e.target.value);
    }
    return <WrapperDiv>
        <img src={searchLogo} alt="logo" />
        <SearchInput
            value={searchText}
            onChange={(e) => __handleOnChange(e)}
            placeholder="Search for any Item"
        ></SearchInput>
    </WrapperDiv>;
}
export default SearchComponent;