import Segment from "../Segment";

export default class DesignOfficeShoppingCostManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/designOfficeShoppingCostManagement.html');
    }

    mounted() {
        console.log('designOfficeShoppingCostManagement mounted')
    }
}