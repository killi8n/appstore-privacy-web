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

const AppImagePicture = styled.picture``;

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
                    <AppImagePicture>
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png 2x"
                            type="image/png"
                        />
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/217x0w.webp 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/217x0w.png 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.png 2x"
                            type="image/png"
                        />
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.png 2x"
                            type="image/png"
                        />
                        <AppImage src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png 1x, https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/fd/09/fbfd0919-4b63-027f-a8ee-383e30ca2cd0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.png" />
                    </AppImagePicture>
                </Link>
            </AppButton>

            <AppButton>
                <Link to="/landing/scheduler">
                    <AppTitle>너와 나의 스케줄러</AppTitle>
                    <AppImagePicture>
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png 2x"
                            type="image/png"
                        />
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/217x0w.webp 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/217x0w.png 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.png 2x"
                            type="image/png"
                        />
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.webp 2x"
                            type="image/webp"
                        />
                        <source
                            srcSet="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.png 2x"
                            type="image/png"
                        />
                        <AppImage src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png 1x, https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/10/00/2d/10002dac-d791-75fd-b98d-b9a529730bc6/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/492x0w.png" />
                    </AppImagePicture>
                </Link>
            </AppButton>
        </Wrapper>
    );
};

export default IndexPage;
