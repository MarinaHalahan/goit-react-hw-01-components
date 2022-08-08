import { StatsInfo,Label, Quantity } from "./Stats.styled"


export const Stats = ({ text, number }) => {
    return (<StatsInfo>
        <Label>{text}</Label>
        <Quantity>{number}</Quantity>
    </StatsInfo>
)
};










