import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AppImageList from '../../components/organisms/AppImageList';
import LandingTemplate from '../../components/templates/LandingTemplate';
import withHeader from '../../lib/HoC/withHeader';
import { PathParams } from '../../types';

interface LandingPageProps extends RouteComponentProps<PathParams> {}
interface LandingPageState {}

const travelLoggerAppImageUrls = [
    'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/80/ed/24/80ed24bc-093c-f5f6-6843-73613bc1486b/58504bc8-9ef4-4bc4-88e0-b48acba5f9ae_Webp.net-resizeimage__U00289_U0029.png/400x800bb.png',
    'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/94/47/14/944714c4-734a-c9d4-5b2c-2d0315831c89/cd840831-268a-4579-890e-33ca564c8651_Webp.net-resizeimage__U002810_U0029.png/400x800bb.png',
    'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/63/a8/5f/63a85fa9-f92e-c0f2-5d0d-8aba043e7bce/b93cadde-f9f4-470d-b9c5-79f23cf537aa_Webp.net-resizeimage__U00287_U0029.png/400x800bb.png',
];
const schedulerAppImageUrls = [
    'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/0e/ee/50/0eee50f4-7b90-b7e9-3392-c8cc4cb46350/9b8a4827-705e-486b-b628-6997de3c992f_Simulator_Screen_Shot_-_iPhone_11_Pro_Max_-_2020-11-23_at_21.27.31.png/230x0w.png',
    'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/93/67/a5/9367a5ff-c2b1-6765-6eb5-12555b7b3b75/b95fe383-24b7-409b-8acb-ca845fe351f4_Simulator_Screen_Shot_-_iPhone_11_Pro_Max_-_2020-11-23_at_21.27.33.png/230x0w.png',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/f7/30/a3/f730a3bd-740d-cf79-453f-eceb1806591a/c80787b7-1643-4d0b-b977-9ea9eaa0cd67_Simulator_Screen_Shot_-_iPhone_11_Pro_Max_-_2020-11-23_at_21.27.36.png/230x0w.png',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/14/e9/cf/14e9cf2d-b03b-cd93-5fe1-5e78da8ea46f/c995e39a-0db2-44a0-b2a1-5b9ac0ec4569_Simulator_Screen_Shot_-_iPhone_11_Pro_Max_-_2020-11-23_at_21.27.58.png/230x0w.png',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/11/86/f4/1186f434-da2d-1a65-733f-fe3737c90c64/fd28ebdb-2231-4581-910a-e26f34d25aa5_Simulator_Screen_Shot_-_iPhone_11_Pro_Max_-_2020-11-23_at_21.28.36.png/230x0w.png',
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
                                    ? travelLoggerAppImageUrls
                                    : schedulerAppImageUrls
                            }
                        />
                    ),
                }}
                storeUrl={
                    appName === 'travellogger'
                        ? 'https://apps.apple.com/kr/app/travel-logger/id1491698164'
                        : 'https://apps.apple.com/kr/app/%EB%84%88%EC%99%80%EB%82%98%EC%9D%98-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%9F%AC/id1541528956'
                }
            />
        );
    }
}

export default withHeader()(withRouter(LandingPage));
