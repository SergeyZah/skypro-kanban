import styled from "styled-components";

export const CategoriesTheme = styled.div`
  width: auto;
  height: 15px;
  font-size: 14px;
  font-weight: 250;
  line-height: 14.21px;
  letter-spacing: 0%;
  text-align: center;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  &.card__theme--orange {
    background:  rgba(255, 228, 194, 1);
    p {
      color: rgba(255, 109, 0, 1);
    }
  }

  &.card__theme--green {
    background: rgba(180, 253, 209, 1);
    p {
      color: rgba(6, 177, 110, 1);
    }
  }

  &.card__theme--purple {
    background: rgba(233, 212, 255, 1);
    p {
      color: rgba(154, 72, 241, 1);
    }
  }
`;
