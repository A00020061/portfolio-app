import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
`;

export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-inline: auto;
`;

export const CoinInfoDiv = styled.div`
  margin: 0 0 1rem 0;
  padding-left: 1rem;
`;
export const ChartContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
  padding: 1rem;
  border: 0.7px solid white;

  width: 67%;
`;
export const IndicatorContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  position: relative;
  width: 30%;
  border: solid white;

  font-family: Arial, Helvetica, sans-serif;
`;
export const PieInfo = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 12px 11px;
  font-size: 16px;
  @media only screen and (min-width: 1400px) {
    font-size: 18px;
    padding: 22px 21px;
  }
`;
export const GreedFigure = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  color: rgba(255, 255, 255, 0.9);
  h2 {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 1400px) {
      font-size: 2.5rem;
    }
  }
`;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;

  li {
    padding: 5px 0;
    list-style: none;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    @media only screen and (min-width: 1400px) {
      font-size: 16px;
    }
  }
`;
export const Wrapper = styled.div`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1400px) {
    width: 75%;
  }
`;
export const Canvas = styled.div`
  margin-top: -3rem;

  @media only screen and (min-width: 1400px) {
    margin-top: -5rem;
  }
`;
