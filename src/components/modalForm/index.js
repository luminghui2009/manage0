import React from 'react';
import {Modal,Form,Input,Icon} from 'antd';
const FormItem=Form.Item;
export default class ModalForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:this.props.visible,
            editItem:this.props.editItem
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            visible:nextProps.visible,
            editItem:nextProps.editItem
        })
    };
    handleCancel=(e)=>{
        this.setState(...this.state,{
            visible:false
        });
    };
    render(){
        return(
            <div>
                <Modal title="修改音乐" visible={this.state.visible} onCancel={this.handleCancel}>
                    <Form>
                        <FormItem label="歌手" labelCol={{span:3}} wrapperCol={{span:18}} required>
                               <Input />
                        </FormItem>
                        <FormItem label="歌名" labelCol={{span:3}} wrapperCol={{span:18}} required>
                            <Input />
                        </FormItem>
                        <FormItem label="哪个国家" labelCol={{span:3}} wrapperCol={{span:18}} required>
                            <Input />
                        </FormItem>


                    </Form>
                </Modal>
            </div>
        )
    }
}