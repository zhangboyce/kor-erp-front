import Segment from "../Segment";

export default class UnitPriceManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/unitPriceManagement.html');
    }

    mounted() {
        console.log('unitPriceManagement mounted')
    }
}