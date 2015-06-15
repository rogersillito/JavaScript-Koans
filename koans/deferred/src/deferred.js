var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.Deferred = function() {
    var doneCallbacks = [], isResolved, args, failedCallback;

    this.done = function(f) {
        doneCallbacks.push(f);
        if (isResolved) {
           this.resolve.apply(undefined, args); 
        }
        return this;
    };

    this.resolve = function() {
        for (var i in doneCallbacks) {
            doneCallbacks[i].apply(undefined, arguments);
        }
        args = arguments;
        isResolved = true;
        return this;
    };

    this.failed = function(f) {
        failedCallback = f;
        return this;
    };

    this.reject = function(argument) {
        if (isRejected) {
            failedCallback(argument);
        }
        return this;
    };
};
