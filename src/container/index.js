import React from 'react';
import {Link} from 'react-router-dom';
import {Menu,Icon,Switch,Layout} from 'antd';
import Top from './header/index';
import Contents from './content/index';
import Bottom from './footer/index';
const {Sider}=Layout;
const SubMenu=Menu.SubMenu;
import {allMenu} from '../utils/menu';
import './index.less';
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            collapsed:false,
            theme:'dark',
            mode:'inline',
            current:'1'
        }
    }
    handleClick=(e,special)=>{
        this.setState({
            current:e.key||special
        });
    }
    changeTheme = (value) => {
        this.setState({
            theme: value ? "dark" : "light"
        });
    }
    toggle=()=>{
        this.setState({
            collapsed:!this.state.collapsed,
            mode:this.state.collapsed?'inline':'vertical'
        });
    }
    clear=()=>{
        this.setState({
            current:'index'
        });
    }
    render(){
        return(
            <div>
                <Layout style={{height:document.documentElement.clientHeight}}>
                    <Sider collapsible collapsed={this.state.collapsed} trigger={null} className="sideBar">
                        {this.state.theme === 'light' ?<a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
                            <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>}
                        { this.state.theme === 'light' ? <span className="author">路</span> : <span className="author white">路</span> }
                        <Menu theme={this.state.theme} onClick={this.handleClick} mode={this.state.mode} defaultOpenKeys={['']} selectedKeys={[this.state.current]}>
                            {allMenu.map(item=>{
                                if(item.children&&item.children.length){
                                    return(
                                        <SubMenu key={item.url} title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
                                            {item.children.map(menu=>{
                                                return <Menu.Item key={menu.url}>
                                                    <Link to={`/${menu.url}`}>{menu.name}</Link>
                                                </Menu.Item>
                                            })}
                                        </SubMenu>
                                    )
                                }
                                return (
                                    <Menu.Item key={item.url}>
                                        <Link to={`/${item.url}`}>
                                            <Icon type={item.icon}/>
                                            <span>{item.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                        <div className="switch">
                            <Switch checked={this.state.theme=="dark"} checkedChildren="Dark" unCheckedChildren="Light" onChange={this.changeTheme}/>
                        </div>
                    </Sider>
                    <Layout>
                        <Top toggle={this.toggle} collasped={this.state.collapsed} clear={this.clear}/>
                        <Contents/>
                        <Bottom/>
                    </Layout>
                </Layout>


            </div>
        )
    }
}