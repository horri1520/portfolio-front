import React from 'react';
import styled from 'styled-components';
import { mqPc } from '../../styles/mixins';
import HorizontalLine from '../atoms/HorizontalLine';
import TechnologyDrawingCanvas from '../organisms/technology/DrawingCanvas';
import TechnologyMarkdownEditor from '../organisms/technology/MarkdownEditor';
import TechnologyReactHooks from '../organisms/technology/ReactHooks';
import TechnologyWasm from '../organisms/technology/Wasm';
import PortfolioTemplate from './common/PortfolioTemplate';

const DrawingCanvasWrapper = styled.div`
  display: none;
  ${mqPc(`display: initial;`)}
`;

const TechnologyTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <DrawingCanvasWrapper>
        <TechnologyDrawingCanvas />
        <HorizontalLine />
      </DrawingCanvasWrapper>

      <TechnologyMarkdownEditor />
      <HorizontalLine />
      <TechnologyWasm />
      <HorizontalLine />
      <TechnologyReactHooks />
    </PortfolioTemplate>
  );
};

export default TechnologyTemplate;
