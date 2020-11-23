import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Image = styled.img`
    width: 230px;
    height: 497px;
    background-color: #ababab;

    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    border-radius: 5px;

    margin-left: 0.75rem;
    margin-right: 0.75rem;
    margin-top: 32px;
    background-color: #ffffff;
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
