import Segment from "../Segment";

export default class AsSearch extends Segment {
    constructor(parent) {
        super(parent, 'segment/asSearch.html');
    }

    init() {
        let data = '';
        this.flush(data);
    }

    mounted() {
        console.log('AsSearch mounted')
    }
}