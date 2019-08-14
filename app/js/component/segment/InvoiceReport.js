import Segment from "../Segment";

export default class InvoiceReport extends Segment {
    constructor(parent) {
        super(parent, 'segment/invoiceReport.html');
    }

    mounted() {
        console.log('invoiceReport mounted')
    }
}