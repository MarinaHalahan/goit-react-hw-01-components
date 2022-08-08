import styled from "styled-components";
import { StatsInfo,Label, Quantity } from "./Stats.styled"


export const Stats = ({ text, number }) => {
    return (<StatsInfo>
        <Label>{text}</Label>
        <Quantity>{number}</Quantity>
    </StatsInfo>
)
};











{/* <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul> */}