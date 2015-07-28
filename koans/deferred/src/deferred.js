var log = console.log.bind(console);
var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.Deferred = function() {

    var resolveCallbacks = [],
        rejectCallbacks = [],
        deferredValues,
        self = this;

    //TODO: could I implement when() without these being public?
    this.isResolved = false;
    this.isRejected = false;

    this.done = function(resolvedHandler) {
        resolveCallbacks.push(resolvedHandler);
        if (self.isResolved) {
            self.resolve.apply(self, deferredValues);
        }
        return self;
    };

    this.resolve = function() {
        deferredValues = arguments;
        for (var i = 0; i < resolveCallbacks.length; i++) {
            resolveCallbacks[i].apply(null, deferredValues);
        }
        self.isResolved = true;
        return self;
    };

    this.failed = function(rejectHandler) {
        rejectCallbacks.push(rejectHandler);
        if (self.isRejected) {
            self.reject.apply(self, deferredValues);
        }
        return self;
    };

    this.reject = function() {
        deferredValues = arguments;
        for (var i = 0; i < rejectCallbacks.length; i++) {
            rejectCallbacks[i].apply(null, deferredValues);
        } 
        self.isRejected = true;
        return self;
    };

    this.then = function(resolvedHandler, rejectHandler) {
        self.done(resolvedHandler);
        self.failed(rejectHandler);
        return self;
    };
};

SAMURAIPRINCIPLE.dtlog = function (label) {
    var dt = new Date();
    console.log(label + ': ' + dt.getSeconds() + '.' + dt.getMilliseconds());
};

// THIS CAN'T BE RIGHT?? WOULD RESOLVE EVEN WHEN ALL THE DEFERREDS ARE STILL PENDING...
SAMURAIPRINCIPLE.Deferred.when = function() {
    var deferred = new SAMURAIPRINCIPLE.Deferred();
    for (var i = 0; i < arguments.length; i++) {
        var thisDeferred = arguments[i]; 
        // while (!(thisDeferred.isResolved || thisDeferred.isRejected)) {
        //     SAMURAIPRINCIPLE.dtlog('pending');
        //     window.setTimeout(function() {}, 200);
        // }
        if (thisDeferred.isRejected) {
            return deferred.reject();
        }
    }
    return deferred.resolve();
}

/*
// THIS ISN'T RIGHT - but I think this  is the right approach?? 
SAMURAIPRINCIPLE.Deferred.when_wrong = function() {
    var deferred = new SAMURAIPRINCIPLE.Deferred(), newDeferred;
    // var rejectionHandled = false;
    // var handleReject = function() { rejectionHandled = true; };
    for (var i = 0; i < (arguments.length); i++) {
        var thisDeferred = arguments[i]; 
        deferred = deferred.then(function() {thisDeferred.resolve() );
    }
    deferred.resolve();
    return deferred;
}
*/
