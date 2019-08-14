import Segment from "../Segment";

export default class AdminManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/adminManagement.html');
    }

    mounted() {
        console.log('AdminManagement mounted')
    }
}