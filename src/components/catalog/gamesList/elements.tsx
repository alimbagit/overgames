import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';


export const GamesListWrapper = styled.div`
    position:relative;

    ${breakpoint('mobile')`
        top:160px;
    `}

    ${breakpoint('desktop')`
        top:100px;
    `}
`;