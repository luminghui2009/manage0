import React from 'react';
import {Row,Col,Card,Timeline,Icon} from 'antd';
import './index.less';
export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Row gutter={10}>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="left">
                                        <Icon type="heart" className="icon"/>
                                    </div>
                                    <div className="right">
                                        <div>收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="left">
                                        <Icon type="cloud" className="icon"/>
                                    </div>
                                    <div className="right">
                                        <div>云存储</div>
                                        <h2>1000</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="left">
                                        <Icon type="camera" className="icon"/>
                                    </div>
                                    <div className="right">
                                        <div>照片</div>
                                        <h2>100</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="left">
                                        <Icon type="heart" className="icon"/>
                                    </div>
                                    <div className="right">
                                        <div>收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="cloud-box">
                            <Card>
                                <div className="y-center">
                                    <div className="left">
                                        <Icon type="book" className="icon"/>
                                    </div>
                                    <div className="right">
                                        <div>书本</div>
                                        <h2>500</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}