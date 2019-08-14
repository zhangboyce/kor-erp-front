import Segment from "../Segment";

export default class EtcCostManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/etcCostManagement.html');
    }

    mounted() {
        console.log('etcCostManagement mounted')
    }
}