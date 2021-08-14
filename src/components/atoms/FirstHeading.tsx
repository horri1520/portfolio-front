import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../styles/mixins';
import { colors, fontFamilies } from '../../styles/variables';
import { classes } from '../../utils/classes';

type Props = {
  enHeading: string;
  jpHeding: string;
  className?: string;
};

const Root = styled.h1`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Decoration = styled.div`
  display: inline-block;
  width: 32px;
  height: 2px;
  background: ${colors.defaultBlue};
  margin-right: 16px;
`;

const EnHeading = styled.span`
  font-family: ${fontFamilies.enFont};
  ${fontSize(24)};
  font-weight: 400;
`;

const JpHeading = styled.span`
  margin-left: 12px;

  ${fontSize(20)};
  font-weight: 300;
`;

const FirstHeading: React.VFC<Props> = ({ enHeading, jpHeding, className }) => {
  return (
    <Root className={classes(className)}>
      <Decoration />
      <EnHeading>{enHeading}</EnHeading>
      <JpHeading>{jpHeding}</JpHeading>
    </Root>
  );
};

export default FirstHeading;
