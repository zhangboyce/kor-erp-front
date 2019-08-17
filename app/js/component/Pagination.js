import Segment from "./Segment";
import $ from 'jquery';

export default class Pagination extends Segment {
    constructor(parent, callback) {
        super(parent, 'include/__pagination__.html');
        this.callback = callback;
    }

    mounted() {
        let self = this;
        if (self.callback && typeof self.callback === 'function') {
            this.$this.find('.page-num').click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                let pageNum = $(this).data('page');
                self.callback(pageNum);
            });
        } else {
            console.warn('Pagination callback is not a function.');
        }
    }
}