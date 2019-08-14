import Segment from "../Segment";

export default class CustomerQualityManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/customerQualityManagement.html');
    }

    mounted() {
        console.log('customerQualityManagement mounted')
    }
}