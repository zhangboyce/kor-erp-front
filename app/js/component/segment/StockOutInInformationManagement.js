import Segment from "../Segment";

export default class StockOutInInformationManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/stockOutInInformationManagement.html');
    }

    mounted() {
        console.log('stockOutInInformationManagement mounted')
    }
}