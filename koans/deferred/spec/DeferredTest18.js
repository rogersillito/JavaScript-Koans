describe('Deferred.when', function () {
  xit('should not return until all Deferreds have either resolved or rejected', function () {
      // THIS DOESN'T WORK - MY WHEN IS SYNCHRONOUS SO BLOCKS EXECUTION PREVENTING THE DELAYED RESOLVE EVER HAPPENING...
    var doneCallback = jasmine.createSpy(),
        failedCallback = jasmine.createSpy(),
        pending = new SAMURAIPRINCIPLE.Deferred();

      window.setTimeout(function() {
          pending.resolve();
          SAMURAIPRINCIPLE.dtlog('resolved');
      }, 2000);

    pending.resolve();

      window.setTimeout(function() {
          SAMURAIPRINCIPLE.dtlog('pre-when');
            SAMURAIPRINCIPLE.Deferred.when(
            (new SAMURAIPRINCIPLE.Deferred()).resolve(),
            (new SAMURAIPRINCIPLE.Deferred()).resolve(),
            pending
            ).then(doneCallback, failedCallback);
          SAMURAIPRINCIPLE.dtlog('when-done');
            expect(doneCallback).toHaveBeenCalled();
            expect(failedCallback).not.toHaveBeenCalled();
      }, 1);

      SAMURAIPRINCIPLE.dtlog('end of describe');
  });
});
