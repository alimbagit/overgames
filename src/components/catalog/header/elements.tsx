import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';


export const HeaderWrapper = styled.div`
    
    width: 100%;
    position:fixed;
    /* background-color:'#421977'; */
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    z-index:5;
    top:0;
`;

export const HeaderContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 0;
    ${breakpoint('mobile')`
        height: 140px;
    `}

    ${breakpoint('desktop')`
        height: 80px;
    `}
`;