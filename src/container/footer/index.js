import React from 'react';
import {Layout} from 'antd';
import './index.less';
const { Footer }=Layout;
export default class Bottom extends React.Component{
    constructor(){
        super();
        this.state={
            timer:0
        }
    }
    tick=()=>{
        this.setState({
            timer:this.state.timer+1
        });
    }
    componentDidMount(){
        this.interVal=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interVal)
    }
    render(){
        return(
            <div className="bottom">
                <Footer>
                    <div>
                        <span className="me">@2017路明慧</span>
                        <span className="stay">{"您已停留"+this.state.timer+"秒"}</span>
                    </div>
                </Footer>
            </div>
        )
    }
}