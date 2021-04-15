import styled from "styled-components";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
