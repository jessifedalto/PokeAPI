import styled from "styled-components";

export const CardContent = styled.div<{theme: "dark" | "light"}>`
    width: 350px;
    height: 400px;
    background-color: cadetblue;
    border: 2px solid;
    border-color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-weight: bolder;
    font-size: x-large;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: auto;
    height: auto;
`