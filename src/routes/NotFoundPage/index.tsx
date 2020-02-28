import React from 'react';
import Styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const Wrapper = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NotFoundDescription = Styled.p`
    font-size: 1.5rem;
`;

const BackButton = Styled.button`
    background: #74b816;
    border: none;
    outline: none;
    color: #ffffff;
    height: 2.25rem;
    width: 8rem;
    border-radius: 2px;
    font-size: 1.25rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;

    &:hover {
        background-color: #82c91e;
    }

    &:active {
        background-color: #66a80f;
    }
`;

const NotFoundPage = () => {
    return (
        <Wrapper>
            <NotFoundDescription>
                이곳은 없는 페이지 입니다.
            </NotFoundDescription>
            <BackButton>
                <Link to="/">돌아가기</Link>
            </BackButton>
        </Wrapper>
    );
};

export default withRouter(NotFoundPage);
