import Segment from "../Segment";

export default class NotificationManagement extends Segment {
    constructor(parent) {
        super(parent, 'segment/notificationManagement.html');
    }

    mounted() {
        console.log('NotificationManagement mounted')
    }

    destroy() {
        console.log('NotificationManagement destroy')
    }
}