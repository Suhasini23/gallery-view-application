export const __imageWrapper = (props) => ({
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridAutoRows: "minmax(50px, auto)",
    paddingTop: "120px",
    minHeight: "60vh"
}
);
export const __wrapper = (props) => ({
    ".infinite-scroll-component__outerdiv": {
        ".infinite-scroll-component": {
            overflow: "unset !important"
        }
    }
}
);