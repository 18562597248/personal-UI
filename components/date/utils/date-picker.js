import Picker from '../other/Picker.vue';
import DatePanel from '../picker/SingleDate.vue';
import DateRangePanel from '../picker/DateRange.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};

import { oneOf } from 'src/utils/assist';

export default {
    name: 'hd-datepicker',
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange', 'week']);
            },
            default: 'date'
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange' || this.type === 'week' ) {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }

        this.panel = getPanel(this.type);
    }
};
