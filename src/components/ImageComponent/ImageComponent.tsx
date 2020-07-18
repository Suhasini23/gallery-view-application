import React from "react";
import styled from "@emotion/styled";
import * as styles from "./__style";
// @ts-ignore
const ImageWrapperDiv = styled.div(styles.__imageItem);

interface IComponentProps {
    url: string;
    key: number
}
const ImageComponent: React.FC<IComponentProps> = props => {
    const { url, key } = props;
    return (
        <ImageWrapperDiv key={key} >
            <img src={url} />
        </ImageWrapperDiv>
    )
};
export default ImageComponent;