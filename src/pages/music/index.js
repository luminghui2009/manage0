import React from 'react';
import './index.less';
import SearchBar from "../../components/searchbar/index";
import {musicKindList, publishCountry, languageKindList} from '../../utils/config';
import fetchJsonp from 'fetch-jsonp';
import moment from 'moment';
import Table from "../../components/table/index";

require('es6-promise').polyfill();
export default class Music extends React.Component {
    constructor() {
        super();
        this.state = {
            tData: []
        }
    }

    searchFields = () => {
        return [
            {
                title: '类型(单独搜索)',
                key: 'type',
                type: 'select',
                defaultValue: "热歌榜",
                // onChange:(value)=>{this.fetchTableData(value)},
                items: () => musicKindList.map(item => ({
                    value: item.value,
                    mean: item.mean
                }))
            },
            {
                title: '发行国家',
                key: 'country',
                type: 'select',
                defaultValue: '全部',
                // onChange:(value)=>{this.fetchTableData(value)},
                items: () => publishCountry.map(item => ({
                    value: item.value,
                    mean: item.mean
                }))
            },
            {
                title: '歌曲语种',
                key: 'language',
                type: 'select',
                defaultValue: '全部',
                // onChange:(value)=>{this.fetchTableData(value)},
                items: () => languageKindList.map(item => ({
                    value: item.value,
                    mean: item.mean
                }))
            },
            {
                title: '发行时间',
                key: ['start', 'end'],
                type: 'rangePicker'
            }
        ]
    }

    /*点击搜索按钮发送ajax请求*/
    onSearch = (searchFields) => {
        const typeId = searchFields.type ? searchFields.type : 2;
        this.fetchTableData(typeId, searchFields);
    };

    /*获取表格数据*/
    fetchTableData = (typeId, searchFields) => {
        fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=200&offset=0`, {method: 'GET'}).then(res => res.json()).then(data => {
            let songList = data.song_list;
            let songArray=[];
            if (searchFields && searchFields.country && searchFields.country !== '0') {
                songList = songList.filter(ele => ele.country === publishCountry.find(t => t.value === parseInt(searchFields.country)).mean)
            }
            if (searchFields && searchFields.language && searchFields.language !== '0') { // 歌曲语种搜索
                songList = songList.filter(ele => ele.language === languageKindList.find(t => t.value === parseInt(searchFields.language)).mean)
            }
            if (searchFields && searchFields.start) { // 发行时间段收索
                songList = songList.filter(ele => moment(ele.publishtime) >= moment(searchFields.start) && moment(ele.publishtime) <= moment(searchFields.end))
            }
            for (let i = 0; i < songList.length; i++) {
                songArray.push({
                    title: songList[i].title,
                    author: songList[i].author,
                    country: songList[i].country,
                    language: songList[i].language,
                    publishtime: songList[i].publishtime
                });
            }
            this.setState({
                tData: songArray
            });
        }).catch(e => console.log(e.message));
    };
    /*设置表头*/


    /*组件加载完成后首先获取默认的歌曲列表*/
    componentDidMount() {
        this.fetchTableData(2);
    }

    render() {
        return (
            <div id="wrap">
                <SearchBar fields={this.searchFields()} onSubmit={this.onSearch}/>
                <div className="tableBox">
                    <Table data={this.state.tData}
                         style={{marginLeft:20}}
                    />
                </div>
            </div>
        )
    }
}