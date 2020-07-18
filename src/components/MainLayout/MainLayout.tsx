import React, { useEffect, Dispatch } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import _ from "../../Utils/lodashUtils";
import InfiniteScroll from 'react-infinite-scroll-component';
import { IState } from "../../comman/GenericInterface";
import * as styles from "./__style";
import { getData } from "../../Actions/mainActions";
import ImageComponent from "../ImageComponent/ImageComponent";
const ImageWrapper = styled.div(styles.__imageWrapper);

interface IMapStateToComponentProps {
    isMobile: {},
    loading: boolean
}
const MainLayout = (props: any) => {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
    const data = _.get(props, "isMobile", []);
    const { loading, fetchImages } = props;

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
                <img
                    src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                    alt="loading"
                />}
        >
            <ImageWrapper>
                {
                    data.map((image, index) => (
                        <ImageComponent url={image.urls.regular} key={index} />
                    ))}
            </ImageWrapper>
        </InfiniteScroll>
    )

}

const mapStateToProps = (state: IState): IMapStateToComponentProps => ({
    isMobile: state.randomData,
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
