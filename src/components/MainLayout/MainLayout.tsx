import React, { useEffect, Dispatch } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import _ from "../../Utils/lodashUtils";
import InfiniteScroll from 'react-infinite-scroll-component';
import { IState } from "../../comman/GenericInterface";
import * as styles from "./__style";
import { getData } from "../../Actions/mainActions";
import ImageComponent from "../ImageComponent/ImageComponent";
import Loader from "../../comman/Loader/Loader";
const ImageWrapper = styled.div(styles.__imageWrapper);
const WrapperDiv = styled.div(styles.__wrapper);

interface IMapStateToComponentProps {
    fetchedData: {},
    loading: boolean
}
const MainLayout = (props: any) => {
    const data = _.get(props, "fetchedData", []);
    const { loading, fetchImages } = props;

    return (
        <WrapperDiv>
            <InfiniteScroll
                dataLength={data.length}
                next={() => fetchImages(5)}
                hasMore={true}
                loader={
                    <Loader />
                }
            >
                <ImageWrapper>
                    {
                        data.map((image, index) => (
                            <ImageComponent url={image.urls.regular} key={index} title={image.alt_description} />
                        ))}
                </ImageWrapper>
            </InfiniteScroll>
        </WrapperDiv>

    )

}

const mapStateToProps = (state: IState): IMapStateToComponentProps => ({
    fetchedData: _.get(state, "randomData"),
    loading: _.get(state, "loading", false)
});
const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
    fetchImages: () => {
        return (
            dispatch(getData())
        )
    }
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
