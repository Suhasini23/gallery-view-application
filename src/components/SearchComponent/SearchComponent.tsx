import React, { useState, Dispatch } from "react";
import { connect } from "react-redux";
import searchLogo from '../../assets/search.png';
import styled from "@emotion/styled";
import * as styles from "./__styles";
import { getSearchedCategoryData } from "../../Actions/mainActions";
const SearchInput = styled.input(styles.__searchInput);
const WrapperDiv = styled.div(styles.__wrapper);

const SearchComponent = (props: any) => {
    const [searchText, setSearchText] = useState("")
    const { searchData } = props;
    const __handleOnChange = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchText(e.target.value);
    }

    const __handleSearch = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault(); // Ensure it is only this code that rusn
            searchData(searchText)
        }
    }
    return <WrapperDiv>
        <img src={searchLogo} alt="logo" />
        <SearchInput
            value={searchText}
            onChange={(e) => __handleOnChange(e)}
            placeholder="Search for any Item"
            // @ts-ignore
            onKeyUp={__handleSearch}
        ></SearchInput>
    </WrapperDiv>;
}
const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
    searchData: (keyword: string) => {
        return (
            dispatch(getSearchedCategoryData(keyword))
        )
    }
});

export default connect(null, mapDispatchToProps)(SearchComponent);
