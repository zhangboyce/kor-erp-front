import Segment from "../Segment";

export default class LaborCostManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/laborCostManagement.html');
    }

    mounted() {
        console.log('laborCostManagement mounted')
    }
}