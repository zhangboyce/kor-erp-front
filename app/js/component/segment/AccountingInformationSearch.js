import Segment from "../Segment";

export default class AccountingInformationSearch extends Segment {
    constructor(parent) {
        super(parent, 'segment/accountingInformationSearch.html');
    }

    mounted() {
        console.log('accountingInformationSearch mounted')
    }
}