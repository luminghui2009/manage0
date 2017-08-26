import React from 'react';
import{Route,Switch} from 'react-router-dom';
import {Layout} from 'antd';
import './index.less';
import Index from '../../pages/index/index';
import Music from '../../pages/music/index';
const { Content }=Layout;
export default class Contents extends React.Component{
    render(){
        return(
            <div>
                <Content>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route  path="/index" component={Index}/>
                        <Route  path="/music" component={Music}/>
                    </Switch>
                </Content>
            </div>
        )
    }
}