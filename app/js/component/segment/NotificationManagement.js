import Segment from "../Segment";
import * as utils from "../../utils";
import $ from 'jquery';
import * as request from '../../../js/request';
import co from 'co';

export default class NotificationManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/notificationManagement.html');
    }

    __loadData__(currentPage) {

        co(function *() {
            let resp = yield request.get('/api/xxx');
            console.log(resp);
        });

        let notifications = [
            { title: '공지사항 내용이 들어갑니다' + Math.random(), date: '2019-09-11'},
            { title: '공지사항의 본 내용이 이 곳에 들어갑니다. 다른 곳을 클릭하면 자동으로 펴진 곳이 접어집니다.', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
            { title: '공지사항 내용이 들어갑니다', date: '2019-09-11'},
        ];

        let total = 313;
        let pageSize = 10;
        let pagination = utils.page(total, pageSize, currentPage);

        return { notifications, pagination };
    }

    init() {
        let { notifications, pagination } = this.__loadData__(1);
        this.flush({ notifications, pagination });
    }

    mounted() {
        let self = this;
        this.$this.find('.page-num:not(.disabled)').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            let pageNum = $(this).data('page');

            let { notifications, pagination } = self.__loadData__(pageNum);
            self.flush({notifications, pagination});
        });
    }

    destroy() {
        console.log('NotificationManagement destroy')
    }
}