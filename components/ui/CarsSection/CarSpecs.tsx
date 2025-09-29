import styled from "styled-components";

type Props = {
  specs: {
    seats: number;
    transmission: string;
    drive: string;
    luggage: string;
    fuel: string;
  };
};

const SpecsWrapper = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
`;

export default function CarSpecs({ specs }: Props) {
  return (
    <SpecsWrapper>
      <h2>Specifications</h2>
      <ul>
        <li>{specs.seats} seats</li>
        <li>{specs.transmission}</li>
        <li>{specs.drive}</li>
        <li>{specs.luggage} luggage</li>
        <li>{specs.fuel}</li>
      </ul>
    </SpecsWrapper>
  );
}
