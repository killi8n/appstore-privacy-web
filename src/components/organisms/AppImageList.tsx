import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    overflow: scroll;
    width: 100%;
`;
const Image = styled.img`
    width: 230px;
    height: 497px;
    background-color: #ababab;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    border-radius: 5px;

    margin-left: 0.75rem;
    margin-right: 0.75rem;
    margin-top: 32px;
    background-color: #ffffff;

    @media (max-width: 414px) {
        width: calc(100vw - 8rem);
    }

    @media (max-width: 320px) {
        width: calc(100vw - 4rem);
    }
`;

interface AppImageListProps {
    imageUrls: string[];
}

class AppImageList extends Component<AppImageListProps> {
    render() {
        const { imageUrls } = this.props;
        return (
            <Wrapper>
                {imageUrls.map((url) => {
                    return <Image key={url} src={url} />;
                })}
            </Wrapper>
        );
    }
}

export default AppImageList;
