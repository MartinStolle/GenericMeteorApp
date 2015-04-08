if (Meteor.isClient) {
    Template.body.helpers({
        simulators: [
            { name: "Simulator 1", ip: "192.168.0.1", status: "available" },
            { name: "Simulator 2", ip: "192.168.0.2", status: "available" },
            { name: "Simulator 3", ip: "192.168.0.3", status: "available" }
        ]
    });
}