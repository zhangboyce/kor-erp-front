import Segment from "../Segment";

export default class ProductionRequestManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/productionRequestManagement.html');
    }

    mounted() {
        console.log('productionRequestManagement mounted')
    }
}