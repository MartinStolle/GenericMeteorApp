Meteor.publish('Simulators', function () {
    return simulators.find({});
});

// Methods execute on the server after being triggered from the client
Meteor.methods({
    'removeSimulator': function(id){
        simulators.remove(id);
    },
    'modifySimulator': function(selectedSimulator, name, hostname, ip, status){
        simulators.update(selectedSimulator, {$set: {
            name: name,
            hostname: hostname,
            ip: ip,
            status: status
        }});
    }
});