import {
  CardBtn,
  CardContent,
  CardDate,
  CardGroup,
  CardItem,
  CardsCard,
  CardTheme,
  CardTitle,
} from "./Loader.styled";
import { Column } from "../Column/Column";

export const Loader = () => {

  return (
      <>
        <CardItem key={1}>
                <CardsCard>
                  <CardGroup>
                    <CardTheme>
                    </CardTheme>
                    <>
                      <CardBtn>
                      </CardBtn>
                    </>
                  </CardGroup>
                  <CardContent>
                      <CardTitle></CardTitle>
                    <CardDate>
                    </CardDate>
                  </CardContent>
                </CardsCard>
              </CardItem>
      </>
  );
};
