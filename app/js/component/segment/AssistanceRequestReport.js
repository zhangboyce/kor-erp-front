import Segment from "../Segment";

export default class AssistanceRequestReport extends Segment {
    constructor(parent) {
        super(parent, 'segment/assistanceRequestReport.html');
    }

    mounted() {
        console.log('assistanceRequestReport mounted')
    }
}