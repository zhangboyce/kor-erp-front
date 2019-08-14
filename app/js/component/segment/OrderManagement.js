import Segment from "../Segment";

export default class OrderManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/orderManagement.html');
    }

    mounted() {
        console.log('orderManagement mounted')
    }
}