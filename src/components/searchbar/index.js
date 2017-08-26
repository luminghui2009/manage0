import React from 'react';
import {Select,DatePicker,Button} from 'antd';
import './index.less';
const Option = Select.Option;
const {MonthPicker, RangePicker}=DatePicker;
const monthFormat = 'YYYY/MM';
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fields:{}
        }
    }
    handleReset=()=>{
        this.setState({
            fields:{}
        });
    };
    handleSearch=(fields)=>{
        this.props.onSubmit(fields);
    };
    handleChange=(field,value)=>{
        this.setField(field,value);
    };
    setField=(field,value)=>{
        let fields=this.state.fields;
        if(typeof field.key != 'string'){
            fields[field.key[0]] = value && value[0];
            fields[field.key[1]] = value && value[1];
        }else{
            fields[field.key] = value;
        }
        this.setState({
            fields
        });
    };
    generateInputs=(fields)=>{
        let components=[],i=0;
        for( let field of fields){
            let items=[];
            if(field.items){
                items=field.items();
            }
           let component=null;
            switch(field.type){
                case 'select':
                    component=(
                        <div className="select-box">
                            <Select onChange={(value)=>{this.handleChange(field,value)}} style={{width:'100px'}}  value={this.state.fields[field.key] == undefined ? (field.defaultValue||field.defaultValue.toString()):this.state.fields[field.key]}>
                                {items && items.map(item=>(
                                    <Option value={item.value.toString()} key={item.value}>{item.mean}</Option>
                                ))}
                            </Select>

                        </div>
                    );
                    break;
                case 'date':
                    component=(
                        <div className="select-date">
                            <DatePicker>
                            </DatePicker>
                        </div>
                    );
                    break;
                case 'rangePicker':
                    component=(
                        <div className="select-date">
                            <RangePicker format={monthFormat} renderExtraFooter={() => '路'} showTime style={{width:200}} value={[this.state.fields[field.key[0]],this.state.fields[field.key[1]]]} onChange={(value)=>{this.handleChange(field,value)}}/>
                        </div>
                    );
                    break;
            }
            components.push(<div key={i++} className='field'>
                <div className="title">{field.title}</div>
                <div className="input" style={{width:"100px"}}>{component}</div>
            </div>)
        }
        return components;
    };
    render(){
        return(
            <div className="searchBar">
                {this.generateInputs(this.props.fields)}
                <div className="button_group">
                    <Button style={{width:80}} icon="reload" onClick={this.handleReset}>重置</Button>
                    <Button style={{width:80,marginLeft:10,backgroundColor:"#fe751a",color:"#fff"}} icon="search" onClick={()=>{this.handleSearch(this.state.fields)}}>搜索</Button>
                </div>

            </div>
        )
    }
}