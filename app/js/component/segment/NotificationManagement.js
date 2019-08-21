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

        this.$this.find('#Warn').click(function () {
           window.app.popover('warn', '我警告一下你！')
        });
        this.$this.find('#Error').click(function () {
            window.app.popover('error', '对不起大哥我错了。')
        });
        this.$this.find('#Normal').click(function () {
            window.app.popover('normal', '我是一个平凡的框框。')
        });
        this.$this.find('#Success').click(function () {
            window.app.popover('success', '热烈庆祝中华人民共和国成立70周年！')
        });
    }

    destroy() {
        console.log('NotificationManagement destroy')
    }
}