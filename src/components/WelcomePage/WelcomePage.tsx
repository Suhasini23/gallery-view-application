import React from "react";
import * as style from "../../comman/__commanStyles";
import styled from "@emotion/styled";
import * as styles from "./__styles";
import LeftAnimationContainer from "../WebPageLeftAnimation/WebPageLeftAnimation";
import constants from "../../comman/style/contants";
// @ts-ignore
const Wrapper = styled.div(styles.__wrapper);
const ContainerWrapper = styled.div(style.__container);
const DetailsWrapper = styled.div(styles.__detailWrapper);
// @ts-ignore
const TitleWrapper = styled.div(styles.__titleWrapper);
// @ts-ignore
const FlipWrapper = styled.span(styles.__filpWrapper);
// @ts-ignore
const Glitch = styled.p(styles.__glitch);
// @ts-ignore
const GlitchFixed = styled.p(styles.__glitchFixed);
// @ts-ignore

const GlitchOpacity = styled.p(styles.__glitchOpacity);
// @ts-ignore
const Title = styled.p(styles.__title);
// @ts-ignore
const SubTitle = styled.p(styles.__subTitleWrapper);
const WelcomePage = (props: any) => {

    const renderWord = () => {
        return (
            <>
                <span>G</span>
                <span>A</span>
                <span>L</span>
                <span>L</span>
                <span>E</span>
                <span>R</span>
                <span>Y</span>
            </>
        )
    }

    const renderWordflipAnimation = () => {
        return (
            <FlipWrapper>
                <Glitch>{renderWord()}</Glitch>
                <GlitchFixed>{renderWord()}</GlitchFixed>
                <GlitchOpacity>{renderWord()}</GlitchOpacity>
            </FlipWrapper>
        );
    };
    return (
        <Wrapper>
            <ContainerWrapper>
                <DetailsWrapper>
                    <TitleWrapper>
                        <Title>Welcome to the  {renderWordflipAnimation()} </Title>
                        <SubTitle>{constants.extraText}</SubTitle>
                    </TitleWrapper>
                    <LeftAnimationContainer />
                </DetailsWrapper>

            </ContainerWrapper>
        </Wrapper>

    )
}
export default WelcomePage;