import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AppImageList from '../../components/organisms/AppImageList';
import LandingTemplate from '../../components/templates/LandingTemplate';
import withHeader from '../../lib/HoC/withHeader';
import { PathParams } from '../../types';

interface LandingPageProps extends RouteComponentProps<PathParams> {}
interface LandingPageState {}

const schedulerAppImageUrls = [
    'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/80/ed/24/80ed24bc-093c-f5f6-6843-73613bc1486b/58504bc8-9ef4-4bc4-88e0-b48acba5f9ae_Webp.net-resizeimage__U00289_U0029.png/400x800bb.png',
    'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/94/47/14/944714c4-734a-c9d4-5b2c-2d0315831c89/cd840831-268a-4579-890e-33ca564c8651_Webp.net-resizeimage__U002810_U0029.png/400x800bb.png',
    'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/63/a8/5f/63a85fa9-f92e-c0f2-5d0d-8aba043e7bce/b93cadde-f9f4-470d-b9c5-79f23cf537aa_Webp.net-resizeimage__U00287_U0029.png/400x800bb.png',
];

class LandingPage extends Component<LandingPageProps, LandingPageState> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        const { appName } = this.props.match.params;
        return (
            <LandingTemplate
                appImageList={{
                    apple: (
                        <AppImageList
                            imageUrls={
                                appName === 'travellogger'
                                    ? schedulerAppImageUrls
                                    : []
                            }
                        />
                    ),
                }}
            />
        );
    }
}

export default withHeader()(withRouter(LandingPage));
