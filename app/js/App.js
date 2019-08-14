import $ from 'jquery';
import nunjucks from 'nunjucks';
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Toolbar from "./component/Toolbar";
import segmentsGen from "./segments_data";

export default class App {
    constructor() {
        this.configNunjucks();
        this.header = new Header($('#header')).render();
        this.sidebar = new Sidebar($('#sidebar')).render();
        this.toolbar = new Toolbar($('#toolbar')).render();
        this.$segment = $('#segment');
    }

    init() {
        this.listenHashChange();
    }

    configNunjucks() {
        window.nunjucks = nunjucks.configure('/component', {
            autoescape: true
        });
    }

    listenHashChange() {
        let segments = segmentsGen(this.$segment);

        // hash change event
        window.onhashchange = hashChange.bind(this);
        if (window.location.hash) {
            hashChange.call(this);
        }

        function hashChange() {
            let hashArr = decodeURIComponent(window.location.hash || '').substring(1).split('\?');
            let hash = hashArr[0];
            let search = hashArr.length > 1 ? hashArr[1] : '';

            let params = search.split('\&')
                .reduce(function(a, c) {
                    let t = c.split('=');
                    a[t[0]] =  t[1] ;
                    return a; }, {});

            let segment = segments[hash];
            if (segment) {
                this.toolbar.add({ name: params['name'], segment });
            } else {
                this.$segment.html(nunjucks.render('404.html', { msg: 'segment not found.' }));
            }
        }
    }
}