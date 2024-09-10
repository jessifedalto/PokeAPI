import { useContext } from "react";
import { CardContent } from "./styles";
import { ThemeContext } from "../../context/theme";
import { Image } from "./styles";

interface CardProps {
    text: string;
    image: string;
}

export default function Card({ text, image }: CardProps) {

    const {theme} = useContext(ThemeContext)
    
    return (
        <>
            <CardContent theme={theme}>
                <Image src={image}/>
                {text}
            </CardContent>
        </>
    )
}