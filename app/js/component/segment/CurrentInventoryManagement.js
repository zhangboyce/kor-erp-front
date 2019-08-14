import Segment from "../Segment";

export default class CurrentInventoryManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/currentInventoryManagement.html');
    }

    mounted() {
        console.log('currentInventoryManagement mounted')
    }
}