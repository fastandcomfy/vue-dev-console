import Vue from 'vue';

const EventBus = new Vue();

export const events = {
    instanceCreated: 'instanceCreated'
};

export default EventBus;
