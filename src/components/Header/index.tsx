import React from 'react';
import Styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    height: 4.5rem;
    background: #82c91e;

    align-items: center;

    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const HeaderTitle = Styled.h1`
    color: #ffffff;
    user-select: none;
`;

const RightMenus = Styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`;

const Menu = Styled.h4`
    color: #ffffff;
`;

const Header = () => {
    return (
        <Wrapper>
            <HeaderTitle>
                <Link to="/">Travel Logger</Link>
            </HeaderTitle>
            <RightMenus>
                <Menu>
                    <Link to="/rules">개인정보 처리방침</Link>
                </Menu>
            </RightMenus>
        </Wrapper>
    );
};

export default withRouter(Header);
