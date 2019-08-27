import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popconfirm } from 'antd';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRows: []
        };
    }

    render() {
        let data = this.props.data || [];
        let titles = this.props.titles || [];
        let isEditable = this.props.isEditable;

        let removeBtnClassName = classNames({
            'remove-column': true,
            'disabled': !this.hasSelected()
        });
        return (
            <div>
                <table className={ isEditable? 'editable': '' } cellPadding="0" cellSpacing="0">
                    <thead>
                    <tr>{ titles.map((title, i) => <th key={ i } colSpan={ title.colSpan }>{ title.name }</th>)}</tr>
                    </thead>
                    <tbody>
                    { data.map((it, j) => <tr className={ this.isSelected(j) ? 'selected': '' } onClick={ this.selectRow(j) } key={j}>{ (it || []).map((column, k) => <td key={k}>{ column }</td> )}</tr>)}
                    </tbody>
                </table>
                {
                    isEditable &&
                    <div className='table-edit-btn'>
                        <input onClick={ this.props.onAddRow } className='add-column' type='button' value='증가하다' />

                        {/*<Popconfirm placement="top" title='sss' onConfirm={confirm} okText="Yes" cancelText="No">*/}
                            {/**/}
                        {/*</Popconfirm>*/}
                        <input onClick={ this.removeSelected.bind(this) } className={ removeBtnClassName } type='button' value='삭제' />
                    </div>
                }
            </div>
        )
    }

    removeSelected() {
        this.props.onRemoveSelected(this.state.selectedRows);
        this.setState({ selectedRows: [] })
    }

    isSelected(i) {
        return this.state.selectedRows.indexOf(i) !== -1;
    }

    hasSelected() {
        return this.state.selectedRows.length !== 0;
    }

    selectRow(i) {
        return (e) => {
            if (!this.props.isEditable) return;
            let index = this.state.selectedRows.indexOf(i);

            let selectedRows = [...this.state.selectedRows];
            if (index !== -1) {
                selectedRows.splice(index, 1);
            } else {
                selectedRows.push(i);
            }
            this.setState(Object.assign({}, this.state, { selectedRows }));
        }
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    titles: PropTypes.array,
    onRemoveSelected: function(props, propName, componentName) {
        if (props['isEditable'] && typeof props[propName] !== "function") {
            return new Error(`Invalid prop [${ propName }] supplied to ${componentName}, Validation failed. prop [${propName}] must be a function while prop [isEditable] is true`);
        }
    },
    onAddRow: function(props, propName, componentName) {
        if (props['isEditable'] && typeof props[propName] !== "function") {
            return new Error(`Invalid prop [${ propName }] supplied to ${componentName}, Validation failed. prop [${propName}] must be a function while prop [isEditable] is true`);
        }
    },
    isEditable: PropTypes.bool
};