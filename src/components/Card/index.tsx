import { useContext } from "react";
import { CardContent } from "./styles";
import { ThemeContext } from "../../context/theme";
import { Image } from "./styles";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: number;
    text: string;
    image: string;
}

export default function Card({ id, text, image }: CardProps) {

    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    
    return (
        <>
            <CardContent theme={theme} onClick={() => navigate("/" + id)}>
                <Image src={image}/>
                {text.charAt(0).toUpperCase() + text.slice(1)}
            </CardContent>
        </>
    )
}