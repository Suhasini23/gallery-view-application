import React, { useState } from "react";
import styled from "@emotion/styled";
import * as styles from "./__style";
import ModalComp from "../../comman/Modal/Modal";
// @ts-ignore
const ImageWrapperDiv = styled.div(styles.__imageItem);

interface IComponentProps {
    url: string;
    key: number;
    title: string
}
const ImageComponent: React.FC<IComponentProps> = props => {
    const { url, key, title } = props;
    const [open, setOpen] = useState(false);

    const handleImageClick = (value = true) => {
        setOpen(value)
    }
    return (
        <>
            {/* @ts-ignore */}
            <ImageWrapperDiv key={key} role="button" onClick={handleImageClick} >
                <img src={url} />
            </ImageWrapperDiv>
            {open && <ModalComp shouldOpen={open} handleCloseClick={handleImageClick} url={url} title={title} />}
        </>

    )
};
export default ImageComponent;