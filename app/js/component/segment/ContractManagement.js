import Segment from "../Segment";
import * as utils from "../../utils";
import $ from 'jquery';

export default class ContractManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/contractManagement.html');
        this.current = null;
        this.selectedYear = '2012';
        this.selectedQuarter = '가을철';
        this.pagination = {};
        this.results = [];
        this.years = [];
        this.quarters = [];
    }

    __loadData__(currentPage, year, quarter) {
        let results = [
            { id: '0', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '1', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '2', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '3', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '4', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '5', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '6', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '7', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '8', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
            { id: '9', consumer: '거래처명' + year + ', ' + quarter, year: '2018', quarter: '동계'},
        ];

        let years = [
          '2009','2010','2011','2012','2013','2014',
          '2015','2016','2017','2018','2019','2020',
        ];
        let quarters = ['봄철', '여름', '가을철', '동계'];

        let total = 313;
        let pageSize = 10;
        let pagination = utils.page(total, pageSize, currentPage);

        this.results = results;
        this.pagination = pagination;
        this.years = years;
        this.quarters = quarters;
        this.selectedYear = year;
        this.selectedQuarter = quarter;

        this.__flush__();
    }

    init() {
        this.__loadData__(1, this.selectedYear, this.selectedQuarter);
    }

    __flush__() {
        this.flush({
            results: this.results,
            pagination: this.pagination,
            years: this.years,
            quarters: this.quarters,
            current: this.current,
            selectedYear: this.selectedYear,
            selectedQuarter: this.selectedQuarter,
        });
    }

    mounted() {
        let self = this;
        this.$this.find('.page-num:not(.disabled)').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            let pageNum = $(this).data('page');
            let year = self.selectedYear;
            let quarter = self.selectedQuarter;

            self.__loadData__(pageNum, year, quarter);
        });

        this.$this.find('select[name=year]').change(function (e) {
            let year = $(this).val();
            self.__loadData__(1, year, self.selectedQuarter);
        });
        this.$this.find('select[name=quarter]').change(function (e) {
            let quarter = $(this).val();
            self.__loadData__(1, self.selectedYear, quarter);
        });

        this.$this.find('table tr:not(:first-child)').click(function (e) {
            e.preventDefault();

            let id = $(this).data('id');
            if (self.current === id) {
                self.current = null;
            } else {
                self.current = id;
            }
            self.__loadData__(1, self.selectedYear, self.selectedQuarter)
        });

        this.$this.find('#add').click(e  => {
            let modal = $(window.nunjucks.render('include/__addContractManagementModal__.html', {
                years: this.years,
                quarters: this.quarters
            }));
            this.$this.append(modal);
            modal.find('.close').click(e => {
                modal.remove();
            });

            // bind event to modal button to add
        });

        this.$this.find('#edit').click(e  => {
            if (this.current === null) return;
            let item = this.results.find(it => it.id == this.current);
            let modal = $(window.nunjucks.render('include/__editContractManagementModal__.html', {
                item: item,
                years: this.years,
                quarters: this.quarters
            }));

            this.$this.append(modal);
            modal.find('.close').click(e => {
                modal.remove();
            });

            // bind event to modal button to edit
        });

        this.$this.find('#delete').click(e  => {
            if (this.current === null) return;
        });
    }
}