import React, { Component } from 'react';
import styled from 'styled-components';
import StoreTitle from '../molecules/StoreTitle';

const TemplateWrapper = styled.div``;
const AppImageListWrapper = styled.div`
    display: flex;
    margin-left: 1.5rem;
    @media (max-width: 802px) {
        margin-left: 0px;
    }
`;

interface LandingTemplateProps {
    appImageList: {
        apple?: React.ReactNode;
        android?: React.ReactNode;
    };
    storeUrl?: {
        apple: string;
        android: string;
    };
}

class LandingTemplate extends Component<LandingTemplateProps> {
    render() {
        const { appImageList, storeUrl } = this.props;
        return (
            <TemplateWrapper>
                <StoreTitle titleText="appstore" storeUrl={storeUrl?.apple} />
                {appImageList.apple && (
                    <AppImageListWrapper>
                        {appImageList.apple}
                    </AppImageListWrapper>
                )}
                <StoreTitle
                    titleText="playstore"
                    storeUrl={storeUrl?.android}
                />
                {appImageList.android && (
                    <AppImageListWrapper>
                        {appImageList.android}
                    </AppImageListWrapper>
                )}
            </TemplateWrapper>
        );
    }
}

export default LandingTemplate;
