simulators = new Mongo.Collection("simulators");
statuses = new Mongo.Collection("statuses");

var Schemas = {};

Schemas.Simulator = new SimpleSchema({
    name: {
        type: String,
        label: "Name of Simulator"
    },
    hostname: {
        type: String,
		regEx: /^\w+$/,
        label: "Hostname of the machine"
    },
    ip: {
        type: String,
        label: "IP Address",
		regEx: /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
    },
    status: {
        type: String,
        label: "Status",
    }
});

simulators.attachSchema(Schemas.Simulator);