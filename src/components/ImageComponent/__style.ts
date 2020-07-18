
export const __imageItem = (props: object) => ({
    "&:nth-child(5n)": {
        gridColumnEnd: "span 2",
    },
    "&:nth-child(7n+n)": {
        gridColumnStart: "span 3",
    },
    img: {
        display: "flex",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }
}
);