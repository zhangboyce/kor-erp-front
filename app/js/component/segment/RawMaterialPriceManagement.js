import Segment from "../Segment";

export default class RawMaterialPriceManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/rawMaterialPriceManagement.html');
    }

    mounted() {
        console.log('rawMaterialPriceManagement mounted')
    }
}