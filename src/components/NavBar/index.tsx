import { StyledHeader, Image, StyledLink } from "./styles"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function NavBar() {
    
  const { image, toggleTheme } = useContext(ThemeContext)
    return (
        <>  
            <StyledHeader>
                <StyledLink to='/'> <Image src="pokemon.png"/></StyledLink>
                <Image src={image} onClick={() => toggleTheme()}></Image>
            </StyledHeader>
        </>
    )
}