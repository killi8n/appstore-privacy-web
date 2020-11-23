import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-left: 3px solid #228be6;
    margin-left: 2.25rem;
    background-color: #d0ebff;
    width: 15rem;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 1.5rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    display: flex;

    cursor: pointer;

    @media (max-width: 802px) {
        width: calc(100vw - 3px);
        margin-left: 0px;
    }
`;
const Title = styled.a`
    padding-left: 1rem;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 20px;
    padding-right: 7rem;

    @media (max-width: 414px) {
        font-size: 18px;
    }
`;

interface StoreTitleProps {
    titleText: 'appstore' | 'playstore';
    storeUrl?: string;
}

class StoreTitle extends Component<StoreTitleProps> {
    render() {
        const { titleText, storeUrl } = this.props;
        return (
            <Wrapper>
                <Title href={storeUrl} target="_blank">
                    {titleText.toUpperCase()}
                </Title>
            </Wrapper>
        );
    }
}

export default StoreTitle;
