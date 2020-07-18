import React, { useEffect, Dispatch } from "react";
import Header from "./components/Header/Header";
import * as styles from "./comman/__commanStyles";
import styled from "@emotion/styled";
import { getData } from "./Actions/mainActions";
import { connect } from "react-redux";
import MainLayout from "./components/MainLayout/MainLayout";
import WelcomePage from "./components/WelcomePage/WelcomePage";
const ContainerWrapper = styled.div(styles.__container);

const CLPage = (props: any) => {

    useEffect(() => {
        const { getrandoedata } = props
        getrandoedata();
    }, []);
    return (<div>
        <WelcomePage />
        <Header />
        <ContainerWrapper>
            <MainLayout />
        </ContainerWrapper>
    </div>)
}

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
    getrandoedata: () => {
        return (
            dispatch(getData())
        )
    }
});

export default connect(null, mapDispatchToProps)(CLPage);
