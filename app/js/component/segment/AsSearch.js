import Segment from "../Segment";

export default class AsSearch extends Segment {
    constructor(parent) {
        super(parent, 'segment/asSearch.html');
    }

    mounted() {
        console.log('AsSearch mounted')
    }
}