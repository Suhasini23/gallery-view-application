

import React from "react";
import mainLogo from '../../assets/logo.png';
import SearchComponent from "../SearchComponent/SearchComponent";
import styled from "@emotion/styled";
import * as styles from "./__styles";
// @ts-ignore
const CameraDiv = styled.div(styles.__camera);
const CameraStripDiv = styled.div(styles.__cameraStrip);
// @ts-ignore
const CameraLedDiv = styled.div(styles.__cameraLed);
// @ts-ignore
const CameraLensDiv = styled.div(styles.__cameraLens);
// @ts-ignore
const CameraBtnDiv = styled.div(styles.__cameraBtn);
// @ts-ignore
const WrapperDiv = styled.div(styles.__wrapper);
// @ts-ignore
const CameraShadowDiv = styled.div(styles.__cameraShadow);
// @ts-ignore
const CameraLensOuter = styled.div(styles.__cameraOuter);
// @ts-ignore
const CameraLensInner = styled.div(styles.__cameraInner);




const LeftAnimationContainer = (props: any) => {
    return (
        <WrapperDiv>
            <CameraDiv>
                <CameraStripDiv />
                <CameraLensDiv />
                <CameraLedDiv>
                    <CameraLensOuter />
                    <CameraLensInner />
                </CameraLedDiv>
                <CameraBtnDiv />
            </CameraDiv>
        </WrapperDiv>
    )
}
export default LeftAnimationContainer;