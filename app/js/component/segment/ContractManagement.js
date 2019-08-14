import Segment from "../Segment";

export default class ContractManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/contractManagement.html');
    }

    mounted() {
        console.log('ContractManagement mounted')
    }
}