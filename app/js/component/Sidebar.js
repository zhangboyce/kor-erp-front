import menus from '../menus_data';
import $ from 'jquery';

export default class Sidebar {
    constructor(parent) {
        this.parent = parent;
        this.path = 'sidebar.html';
        this.menus = menus;
    }

    render() {
        this.parent.html(window.nunjucks.render(this.path, { menus: this.menus }))
        this.created();
        return this;
    }

    created() {
        this.parent.find('.section span').click(function (e) {
            let $collapse = $(this).siblings('.collapse');
            $collapse.toggleClass('show');
        });
    }
}