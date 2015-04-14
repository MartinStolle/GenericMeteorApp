Meteor.subscribe('Simulators');

Template.simulatortable.helpers({
    simulators: function () {
        return simulators.find({});
    }
});

Template.registerHelper("statusOption", function() {
	return [
		{label: "Available", value: "Available"},
        {label: "Not Available", value: "Not Available"},
        {label: "Maintenace", value: "Maintenance"}
    ];
});

Template.simulatorrow.helpers({
    'selectedClass': function() {
        var simulatorId = this._id;
        var selectedSimulator = Session.get('selectedSimulator');
        // Do these IDs match?
        if (simulatorId == selectedSimulator) {
            // Return a CSS class
            return "success";
        }
    }
});

Template.body.events({
    "click #edit": function () {
        event.preventDefault();
/*        var selectedSimulator = Session.get('selectedSimulator');
        var name = document.getElementById("name").value;
        var hostname = document.getElementById("hostname").value;
        var ip = document.getElementById("ip").value;
        var status = document.getElementById("status").value;*/
        Meteor.call('modifySimulator', selectedSimulator, name, hostname, ip, status);
    },
    "click #delete": function () {
        Meteor.call('removeSimulator', this._id);
    },
    "click td": function () {
        var simulatorId = this._id;
        var simulator = simulators.findOne(simulatorId);
		var name = AutoForm.getFieldValue('insertSimulatorForm', 'name');
		console.log(name);
//        document.getElementById("name").value = simulator.name;
//        document.getElementById("hostname").value = simulator.hostname;
//        document.getElementById("ip").value = simulator.ip;
        Session.set('selectedSimulator', simulatorId);
    }
});