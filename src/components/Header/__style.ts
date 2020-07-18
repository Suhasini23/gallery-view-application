import fonts from "../../comman/style/fonts";
import colors from "../../comman/style/color";

export const __imageWrapper = () => ({
    img: {
        width: "77px",
        margin: "10px 20px"
    },
    "@media only screen and (max-width: 768px)": {
        img: {
            width: "45px",
            margin: "27px 20px"
        },
    }
});

export const __wrapper = () => ({
    display: "flex",
    height: "99px",
    background: colors.white,
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: "1007",
    boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)"
});