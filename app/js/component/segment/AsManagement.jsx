import Segment from "../Segment";
import ReactDOM from 'react-dom';
import React from 'react';

import DatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style'
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

import Table from '../common/Table.jsx'

export default class AsManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/asManagement.html');

        this.titles = [{ colSpan: 3, name: '신규포장내역' }];
        this.data = [
            ['자켓', '77L', '4'],
            ['가디건', '77L', '5'],
            ['블라우스', '77L', '1'],
            ['치마', '67L', '3'],
            ['치마', '77L', '0'],
        ];
    }

    init() {
        this.mounted();
    }

    mounted() {
        this.__renderReactDatePicker__('date1');
        this.__renderReactDatePicker__('date2');
        this.__renderReactDatePicker__('date3');
        this.__renderReactDatePicker__('date4');

        this.__renderTable__(this.data, this.titles);
    }

    onDateChange(name) {
        return (date, dateString) => {
            console.log('name:' + name, 'date: ' + date, 'dateString: ' + dateString);
        }
    }

    __renderReactDatePicker__(id) {
        ReactDOM.render(<DatePicker
            locale={ locale }
            onChange={ this.onDateChange(id) }
            defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />, document.getElementById(id));
    }

    __renderTable__() {
        ReactDOM.render(<Table
            isEditable={ true }
            data={ this.data }
            onRemoveSelected={ this.removeSelected.bind(this) }
            onAddRow={ this.addRow.bind(this) }
            titles={ this.titles } />,
            document.getElementById('table1'));
    }

    removeSelected(selectedRows = []) {
        let newData = this.data.filter((it, i) => selectedRows.indexOf(i) === -1);
        this.data = newData;
        this.__renderTable__();
    }

    addRow() {
        this.data.push(['new', 'new', 'new']);
        this.__renderTable__();
    }
}