export default class Header {
    constructor(parent) {
        this.parent = parent;
        this.path = 'header.html';
    }

    render() {
        this.parent.html(window.nunjucks.render(this.path));
        return this;
    }
}