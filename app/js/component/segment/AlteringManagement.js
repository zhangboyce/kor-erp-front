import Segment from "../Segment";

export default class AlteringManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/alteringManagement.html');
    }

    mounted() {
        console.log('alteringManagement mounted')
    }
}