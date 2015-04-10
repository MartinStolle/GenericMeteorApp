// Transmit a selection of data into the ether
Meteor.publish('Simulators', function () {
    // Return players "owned" by the current user
    return simulators.find({});
});

// Methods execute on the server after being triggered from the client
Meteor.methods({
    'insertSimulator': function(name, ip, status) {
        simulators.insert({
            name: name,
            ip: ip,
            status: status
        });
    },
    'removeSimulator': function(id){
        simulators.remove(id);
    },
    'modifySimulator': function(selectedSimulator, name, ip, status){
        simulators.update(selectedSimulator, {$set: {name: name, ip: ip, status: status}});
    }
});