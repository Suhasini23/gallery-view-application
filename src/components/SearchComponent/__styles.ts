import fonts from "../../comman/style/fonts";

export const __wrapper = () => ({
    borderRadius: "20px",
    width: "500px",
    margin: "auto",
    height: "30px",
    border: "1px solid",
    display: "flex",
    img: {
        width: "20px",
        padding: "5px"
    }
});
export const __searchInput = (props: object) => ({
    width: "80%",
    outline: "none",
    border: "0px",
    height: "auto",
    fontFamily: fonts.thinFont,
    fontSize: "16px",
    paddingLeft: "15px",

    "@media only screen and (max-width: 768px)": {
        width: "90%",
        fontSize: "14px",
        paddingLeft: "10px"
    }
});