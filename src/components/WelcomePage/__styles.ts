import colors from "../../comman/style/color";
import fonts from "../../comman/style/fonts";
import { keyframes } from "@emotion/core";
export const __wrapper = (props: object) => ({
    backgroundColor: colors.extremeBlack,
    display: "flex",
    height: "100vh",
}
);


export const __detailWrapper = (props: object) => ({
    display: "grid",
    gridTemplateColumns: "65% auto",
    border: "7px solid white",
    margin: "80px 0 0px 0px",
    height: "80vh",
    background: "#000 url(//cssanimation.rocks/demo/starwars/images/bg.jpg)"
}
);

export const __titleWrapper = (props: object) => ({
    color: colors.white,
    fontFamily: fonts.mediumFont,
    marginTop: "50px",
    padding: "140px",
    h3: {
        fontSize: "40px",
        margin: "0px 0 15px"
    }
}
);


export const __filpWrapper = () => ({
    display: "inline",
    fontSize: "65px",
    fontWeight: "800",

    span: {
        animation: ` ${animateWord} 7.5s linear infinite 0s`,
        "-ms-animation": `${animateWord} 7.5s linear infinite 0s`,
        "-webkit-animation": `${animateWord} 7.5s linear infinite 0s`,
        color: colors.yellow,
        opacity: 0,
        overflow: "hidden",
        position: "absolute",
        "&:nth-child(2)": {
            animationDelay: "2.5s",
        },
        "&:nth-child(3)": {
            animationDelay: "5s",
            "-ms-animation-delay": "5s",
            "-webkit-animation-delay": "5s",
        },

        "@media screen and (max-width: 786px)": {
        }
    }

})

const animateWord = keyframes`
  0% { opacity: 0; }
	7.5% { opacity: 0; -webkit-transform: translateY(-40px); }
	15% { opacity: 1; -webkit-transform: translateY(0px); }
	40% { opacity: 1; -webkit-transform: translateY(0px); }
	49% { opacity: 0; -webkit-transform: translateY(40px); }
	60% { opacity: 0; }
	100% { opacity: 0; }
`;