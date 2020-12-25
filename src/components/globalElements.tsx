import styled from "styled-components";
import { Container, ContainerProps } from "@material-ui/core";

export const ContentWrapper = styled(Container).attrs(
  (props: ContainerProps) => ({
    maxWidth:  "md",

    ...props,
  })
)`
  margin: 0 auto 0 auto;
`;
