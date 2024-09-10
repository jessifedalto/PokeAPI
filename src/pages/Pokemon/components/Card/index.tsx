import { useContext } from "react";
import { CardContent, ContentType, Image, StyledType } from "./styles";
import { ThemeContext } from "../../../../context/theme";

interface IType {
    slot: number;
    type: {
        name: string,
        url: string
    }
}

interface CardProps {
    name: string,
    image: string,
    types: IType[],
    imageShiny: string;
}

export default function Card({ name, image, types, imageShiny}: CardProps) {

    const {theme} = useContext(ThemeContext)
    return (
        <>
            <CardContent theme={theme}>
                <Image src={image}/>
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <ContentType>My types: </ContentType>
                {types?.map(t => (
                    <StyledType>{t.type.name}</StyledType>
                ))}
                <Image src={imageShiny}/>
                <StyledType>This is me Shinyyy!!!</StyledType>
            </CardContent>
        </>
    )
}