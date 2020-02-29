import React from 'react';
import Styled from 'styled-components';
import withTemplate from '../../lib/HoC/withTemplate';
import DownloadButton from '../../components/DownloadButton';
import media from '../../lib/style/media';

const Wrapper = Styled.div`
    height: calc(100vh - 4.5rem - 3.5rem - 3.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonsWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;

    ${media.medium} {
        flex-direction: column;
    }
`;

const IndexPage = () => {
    return (
        <Wrapper>
            <ButtonsWrapper>
                <DownloadButton title="App Store" />
                <DownloadButton title="Play Store" />
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default withTemplate(IndexPage);
