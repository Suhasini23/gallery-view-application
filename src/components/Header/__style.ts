import fonts from "../../comman/style/fonts";
import colors from "../../comman/style/color";

export const __imageWrapper = () => ({
    img: {
        width: "60px",
        marginTop: "7px"
    }
});

export const __wrapper = () => ({
    display: "flex",
    height: "75px",
    background: colors.white,
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "24px",
    paddingRight: "24p",
    width: "100%",
    position: "fixed",
    zIndex: "1007",
    boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)"
});