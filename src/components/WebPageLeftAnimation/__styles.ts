import { keyframes } from "@emotion/core";

const led = keyframes`
from {
    opacity:.2;
  }
  
  to {
    opacity:1;
  }
`

export const __camera = (props: object) => ({
    position: "relative",
    width: "300px", height: "300px",
    background: "#eaeaea",
    border: "1px solid rgba(0,0,0,.2)",
    borderRadius: "50px",
    overflow: "hidden",
    zIndex: "2",
    transition: `all .5s ease-in-out`
}
);
export const __cameraBtn = (props: object) => ({
    position: "absolute",
    top: "22px",
    right: "35px",
    width: "40px",
    height: "30px",
    backgroundColor: "#2e3e4f",
    borderRadius: "15px",
    boxShadow: "0px 3px 0px rgba(0,0,0,.4)",
})

export const __cameraShadow = (props: object) => ({
    width: "300px",
    height: "30px",
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: "50%",
    boxShadow: "0px 3px 0px rgba(0,0,0,.4)",
    transition: `all .5s ease-in-out`,
    marginTop: "20px"
})


export const __cameraStrip = (props: object) => ({
    height: "110px",
    backgroundColor: "#54b59a",
    borderTop: "10px solid #479a83",
    borderBottom: "10px solid #479a83",
    margin: "80px 0px",
    boxShadow: "0px 2px 0px rgba(0,0,0,.4)",
})

export const __cameraLens = (props: object) => ({
    position: "absolute",
    top: "50%", left: "50%",
    width: "144px", height: "144px",
    margin: "-90px",
    border: "18px solid #b44b37",
    borderRadius: "50%",
    backgroundColor: "#111",
    boxShadow: "0px 5px 0px rgba(0,0,0,.4)",
})

export const __cameraOuter = (props: object) => ({
    position: "absolute",
    width: "50px", height: "50px",
    margin: "75px 70px",
    border: "20px solid rgb(60, 60, 60)",
    borderRadius: '50%',
    background: "rgb(34, 34, 34)"
})
export const __cameraInner = (props: object) => ({
    position: "absolute",
    width: "8px", height: "8px",
    margin: "105px 100px",
    border: "11px solid rgb(22, 22, 22)",
    borderRadius: '50%',
    background: "rgb(131, 131, 131)"
})

export const __cameraLed = (props: object) => ({
    position: "absolute",
    left: "35px", top: "30px",
    width: "15px", height: "15px",
    borderRadius: "50%",
    backgroundColor: "rgb(255, 136, 115)",
    boxShadow: "inset 0px 1px 0px rgba(0,0,0,.1)",
    animation: `${led} .8s infinite`
})

export const __wrapper = (props: object) => ({
    padding: "150px 0",

})
