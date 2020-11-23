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

    @media (max-width: 414px) {
        font-size: 15px;
    }
`;

const AppImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;
`;

const IndexPage = () => {
    return (
        <Wrapper>
            <AppButton>
                <Link to="/landing/travellogger">
                    <AppTitle>Travel Logger</AppTitle>
                    <AppImage
                        src={require('../../assets/images/TravelLoggerAppIcon.png')}
                    />
                </Link>
            </AppButton>

            <AppButton>
                <Link to="/landing/scheduler">
                    <AppTitle>너와 나의 스케줄러</AppTitle>
                    <AppImage
                        src={require('../../assets/images/SchedulerAppIcon.png')}
                    />
                </Link>
            </AppButton>
        </Wrapper>
    );
};

export default IndexPage;
