import Segment from "../Segment";

export default class PackageLabelReport extends Segment {
    constructor(parent) {
        super(parent, 'segment/packageLabelReport.html');
    }

    mounted() {
        console.log('packageLabelReport mounted')
    }
}