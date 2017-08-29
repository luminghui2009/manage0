import React from 'react';
import { Table as AntTable,Tooltip,Modal, Button ,message} from 'antd';
import './index.less';
import ModalForm from "../modalForm/index";
const confirm = Modal.confirm;
message.config({
    top: 120,
    duration: 2,
});
export default class Table extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            currentPage:1,
            visible:false,
            editItem:{}
        }
    };
    tableHeader = () => {
        return [
            {title: '序号',
                dataIndex: 'rowIndex',
                width: 100
            },
            {title: '歌曲名',
                dataIndex: 'title',
                width: 200
            },
            {title: '歌手',
                dataIndex: 'author',
                width: 200
            },
            {title: '发行国家',
                dataIndex: 'country',
                width: 200
            },
            {title: '语种',
                dataIndex: 'language',
                width: 200
            },
            {title: '发行时间',
                dataIndex: 'publishtime',
                width: 200
            },
            {title: '操作',
                dataIndex: 'action',
                width: 200,
                render: (text, record,index) => (
                    <span>
                        <Tooltip title="修改">
                            <a data-index={index} onClick={this.handleEdit}>修改</a>
                        </Tooltip>
                        <span className="ant-divider"/>
                        <Tooltip title="删除">
                             <a href="javascript:void(0)" data-index={index} onClick={this.handleDelete} >删除</a>
                        </Tooltip>
                    </span>)
            }
        ]

    };
    handleEdit=(e)=>{
        e.preventDefault();
        let data_index=e.target.getAttribute("data-index");
        let index=parseInt(this.state.currentPage-1)*10+parseInt(data_index);
        let item=this.state.data[index];
        this.setState(...this.state,{
            visible:true,
            editItem:item
        });
    };
    handleDelete=(e)=>{
        let data_index=e.target.getAttribute("data-index");
        let delIndex=parseInt(this.state.currentPage-1)*10+parseInt(data_index);
        console.log(delIndex);
        let data=this.state.data;
        let showConfirm=() =>{
            confirm({
                title: '提示',
                content: '确定要删除吗？',
                onOk:()=> {
                    data=data.filter((item,index)=>{
                        return index!= delIndex;
                    });
                    console.log(data);
                    this.setState(...this.state,{
                        data:data,
                        visible:false
                    });
                    message.success("删除成功")
                },
                onCancel() {
                    message.success("取消删除")
                },
            });
        };
        showConfirm();
    };
    componentWillReceiveProps(nextProps){
        if(this.props!=nextProps){
            this.setState(...this.state,{
                data:nextProps.data
            })
        }
    }
    onChangeHandle=(page,pagesize)=>{
      this.setState(...this.state,{
          currentPage:page,
          visible:false
      });
    };

    render() {
        let newData=this.state.data.map((item, index) => ({...item, rowIndex: index + 1, key: index + 1}));
        return (
            <div>
                <AntTable
                    dataSource={newData}
                    columns={this.tableHeader()}
                    pagination={{onChange:this.onChangeHandle,pageSize:10}}
                />
                <ModalForm visible={this.state.visible} editItem={this.state.editItem}/>
            </div>
        )
    }
}
