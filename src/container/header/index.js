import React from 'react';
import {Menu,Icon,Layout} from 'antd';
import {Link} from 'react-router-dom';
import './index.less';
const {Header}=Layout;
const SubMenu=Menu.SubMenu;
export default class Top extends React.Component{
    constructor(){
        super();
        this.state={
            username:''
        };
    };
    getUser=()=>{
        this.setState({
            username:'路明慧'
        });
    };
    componentDidMount(){
        this.getUser();
    };
    render(){
        return(
            <div>
                <Header style={{backgroundColor:"#fff"}}>
                    <Icon type={this.props.collapsed?"menu-unfold":"menu-fold"} className="trigger" onClick={this.props.toggle}/>
                    <Menu mode="horizontal" className="signout" onClick={this.clear}>
                        <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                            <Menu.Item key="signout"><Link to="/login" style={{textAlign:"center",fontSize:"16px"}}>退出</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
            </div>
        )
    }
}