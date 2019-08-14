export default class Segment {
    constructor(parent, path) {
        this.parent = parent;
        this.path = path;
    }

    render() {
        this.parent.html(window.nunjucks.render(this.path));
        this.mounted();
        return this;
    }

    mounted() {

    }

    destroy() {

    }
}