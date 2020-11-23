import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100vw);
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AppButton = styled.div`
    background-color: #ffffff;

    width: 150px;
    height: 150px;

    border-radius: 8px;

    padding: 1rem;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    & + & {
        margin-top: 35px;
    }
`;

const AppTitle = styled.h3`
    text-align: center;
`;

const AppImage = styled.img`
    width: 100%;
    height: 100%;
`;

const IndexPage = () => {
    return (
        <Wrapper>
            <AppButton>
                <Link to="/landing/travellogger">
                    <AppTitle>Travel Logger</AppTitle>
                    <AppImage src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp" />
                </Link>
            </AppButton>

            <AppButton>
                <Link to="/landing/scheduler">
                    <AppTitle>너와 나의 스케줄러</AppTitle>
                </Link>
            </AppButton>
        </Wrapper>
    );
};

export default IndexPage;
