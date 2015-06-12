var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.eventDispatcher = function(host) {
    var listeners = [];

    host.addEventListener = function(eType, l, priority) {
       if (!l) {
           l = eType;
           eType = 'default';
       }
       listeners.push({
           listener: l,
           eventType: eType,
           priority: priority || 0
       }); 
    };

    host.createObservableProperty = function(propertyName) {
        var value;
       /*
       host['on' + propertyName + 'Changed'] = function(l) {
           host.addEventListener(propertyName + 'Changed', l);
       }; */ 
       host['on' + propertyName + 'Changed'] = 
           host.addEventListener.bind(host, propertyName + 'Changed'); 
       host['set' + propertyName] = function(propertyValue) {
           value = propertyValue;
           host.dispatchEvent(propertyName + 'Changed', value);
       }; 
       host['get' + propertyName] = function() {
            return value;
       }; 
    };

    host.listener = function() {
       return listeners[0].listener; 
    };

    host.dispatchEvent = function(eType, eventArg) {
       if (!eventArg) {
           eventArg = eType;
           eType = 'default';
       }
        var typeSpecificListeners = listeners.filter(function(listener){return listener.eventType === eType;});
        typeSpecificListeners.sort(function(a,b) { return a.priority < b.priority; });
        for (var i in typeSpecificListeners) {
            try {
                if (typeSpecificListeners[i].listener(eventArg) === false) {
                    break;
                }
            }
            catch (e) {
            }
        }
    };

    return host;
};
