import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import * as styles from "./__style";
import styled from "@emotion/styled";
// @ts-ignore
const ImageWrapper = styled.div(styles.__imageWrapperModal);
// @ts-ignore
const Title = styled.h2(styles.__modalTitle)
const ModalWrapper = styled.h2(styles.__modalWrapper)

interface IComponentProps {
}
const ModalComp: React.FC<any> = props => {
    const [open, setOpen] = useState(false)
    const { title, url, shouldOpen, handleCloseClick } = props;
    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false);
        handleCloseClick(false)
    };

    return (
        <ModalWrapper>
            <Modal open={shouldOpen} onClose={onCloseModal} center >
                <Title>{title}</Title>
                <ImageWrapper>
                    <img src={url} alt={title} />
                </ImageWrapper>
            </Modal>
        </ModalWrapper>)
};
export default ModalComp;