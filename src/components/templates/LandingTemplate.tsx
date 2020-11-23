import React, { Component } from 'react';
import styled from 'styled-components';
import StoreTitle from '../molecules/StoreTitle';

const TemplateWrapper = styled.div``;
const AppImageListWrapper = styled.div`
    display: flex;
    padding-left: 2.5rem;

    @media (max-width: 802px) {
        padding-left: 1rem;
    }
`;

interface LandingTemplateProps {
    appImageList: {
        apple?: React.ReactNode;
        android?: React.ReactNode;
    };
}

class LandingTemplate extends Component<LandingTemplateProps> {
    render() {
        const { appImageList } = this.props;
        return (
            <TemplateWrapper>
                <StoreTitle
                    titleText="appstore"
                    storeUrl="https://apps.apple.com/kr/app/travel-logger/id1491698164"
                />
                {appImageList.apple && (
                    <AppImageListWrapper>
                        {appImageList.apple}
                    </AppImageListWrapper>
                )}
                <StoreTitle titleText="playstore" />
            </TemplateWrapper>
        );
    }
}

export default LandingTemplate;
