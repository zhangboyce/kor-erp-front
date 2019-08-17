import $ from 'jquery';
let slice = Array.prototype.slice;
export default class Segment {
    constructor(parent, path) {
        this.parent = parent;
        this.path = path;
        this.$this = null;
    }

    __load__() {
        this.$this = $(window.nunjucks.render(this.path, ...slice.call(arguments)));
        this.parent.html(this.$this);
    }

    /**
     * system call a time, cannot be override by child class
     * @returns {Segment}
     */
    render() {
        this.__load__.call(this, ...slice.call(arguments));
        this.init();
        return this;
    }

    /**
     * init method, system call 1 time, override this method to init data and flush
     */
    init() {

    }

    /**
     * call this method when the data changed every time, cannot be override by child class
     */
    flush() {
        this.__load__.call(this, ...slice.call(arguments));
        this.mounted();
        return this;
    }

    /**
     * bind event for element
     */
    mounted() {

    }

    destroy() {

    }
}