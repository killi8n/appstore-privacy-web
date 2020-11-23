import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    height: 3.5rem;
    position: relative;
`;
const Title = styled.h2`
    background-color: #e9ecef;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 100%;
    padding-left: 2.5rem;

    display: flex;
    align-items: center;
`;

const PrivacyButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 3px;
    background-color: #ffffff;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
const PrivacyButtonText = styled.p`
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
`;

interface HeaderProps {
    titleText: string;
    appName: string;
}

class Header extends Component<HeaderProps> {
    render() {
        const { titleText, appName } = this.props;
        return (
            <Link to={`/landing/${appName}`}>
                <TitleWrapper>
                    <Title>{titleText}</Title>
                    <Link to={`/privacy/${appName}`}>
                        <PrivacyButton>
                            <PrivacyButtonText>
                                개인정보 처리방침
                            </PrivacyButtonText>
                        </PrivacyButton>
                    </Link>
                </TitleWrapper>
            </Link>
        );
    }
}

export default Header;
