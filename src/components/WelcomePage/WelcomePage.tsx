import React from "react";
import mainLogo from '../../assets/logo.png';
import * as style from "../../comman/__commanStyles";
import SearchComponent from "../SearchComponent/SearchComponent";
import styled from "@emotion/styled";
import * as styles from "./__styles";
import LeftAnimationContainer from "../WebPageLeftAnimation/WebPageLeftAnimation";
// @ts-ignore
const Wrapper = styled.div(styles.__wrapper);
const ContainerWrapper = styled.div(style.__container);
const DetailsWrapper = styled.div(styles.__detailWrapper);
const TitleWrapper = styled.div(styles.__titleWrapper);
// @ts-ignore
const FlipWrapper = styled.p(styles.__filpWrapper);

const WelcomePage = (props: any) => {

    const renderWordflipAnimation = () => {
        const wordFlipArr = ["FRONTROW", "MEMORIES", "GALLERY"];
        return (
            <FlipWrapper>
                {wordFlipArr.map((item: string, index: number) => {
                    return <span key={index}>{item}</span>;
                })}
            </FlipWrapper>
        );
    };
    return (
        <Wrapper>
            <ContainerWrapper>
                <DetailsWrapper>
                    <TitleWrapper>
                        <h3>Welcome</h3>
                        <h3>to the</h3>
                        {renderWordflipAnimation()}
                    </TitleWrapper>
                    <LeftAnimationContainer />
                </DetailsWrapper>

            </ContainerWrapper>
        </Wrapper>

    )
}
export default WelcomePage;