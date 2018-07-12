import Picker from '../other/Picker.vue';
import TimePanel from '../picker/SingleTime.vue';
import TimeRangePanel from '../picker/TimeRange.vue';
import Options from '../utils/time-mixins';

const getPanel = function (type) {
    if (type === 'timerange') {
        return TimeRangePanel;
    }
    return TimePanel;
};

import { oneOf } from 'src/utils/assist';

export default {
    name: 'hd-timepicker',
    mixins: [Picker, Options],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['time', 'timerange']);
            },
            default: 'time'
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'timerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }
        this.panel = getPanel(this.type);
    }
};
