import Segment from "../Segment";

export default class AsManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/asManagement.html');
    }

    mounted() {
        console.log('AsManagement mounted')
    }
}