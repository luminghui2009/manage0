import { Form, Icon, Input, Button,notification } from 'antd';
const FormItem = Form.Item;
import React from 'react';
import './index.less';
class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let name=this.props.form.getFieldsValue().username;
        let password=this.props.form.getFieldsValue().password;
        if(name == "123" && password == "123"){
            this.props.history.push('/index');
        }else{
            this.openNotificationWithIcon("success")
        }
    }
    openNotificationWithIcon=(type)=>{
        return notification[type]({
                message:"用户名&&密码",
                description:"都是:123",
                duration:6,
                icon:<Icon type="meh-o" />
        })
    }
    componentDidMount(){
        this.openNotificationWithIcon('success')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_wrap">
                <p className="login_title">欢迎来到我的后台管理系统</p>
                <div className="login_main">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button login_btn">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>

            </div>
        );
    }
}
export default Form.create()(Login);


