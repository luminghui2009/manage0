import React from 'react';
import { Table as AntTable} from 'antd';
import './index.less';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="#">修改</a>
      <span className="ant-divider" />
      <a href="#">删除</a>
    </span>
    ),
}];

export default class Table extends React.Component{
    render(){
        return(
            <div>
                <AntTable
                    dataSource={this.props.data.map((item, index) => ({ ...item, rowIndex: index + 1, key: index + 1 }))}
                    columns={this.props.header}
                />
            </div>
        )
    }
}
