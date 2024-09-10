import styled from "styled-components";

export const CardContent = styled.div<{theme: "dark" | "light"}>`
    width: 500px;
    height: 600px;
    background-color: cadetblue;
    border: 2px solid;
    border-color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    font-weight: bolder;
    font-size: xx-large;
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

export const StyledType = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-weight: normal;
    font-size: large;
    font-style: italic;
`

export const ContentType = styled.div`
    font-weight: bold;
    font-size: x-large;
`