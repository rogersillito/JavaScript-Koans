/*jslint nomen: true*/
/*global console, describe, expect, it, jQuery, runs, setTimeout, waits, __*/
	/*
describe('Warmup - timers and asynchronous specs', function () {
	'use strict';
		tip: if change describe into xdescribe the suite will no longer be executed
		you may wish to do that when you move onto the second part of the assignement (because this is a long running suite)
	*/
    /*
	xit('0 - should understand why we need asynchronous specs (so that this spec doesnt just pass)', function (done) {
		setTimeout(function () {
			expect(1).toBe(2);
            done();
		}, 100);
	});
	xit('1 - should understand timers', function (done) {
		var i = 0, t0 = Date.now();
		setTimeout(function () {
			i = 1;
			console.log(5, i, Date.now() - t0);
		}, 200);
		console.log(1, i, Date.now() - t0);
		setTimeout(function () {
			expect(i).toBe(0);
			console.log(4, i, Date.now() - t0);
		}, 100);
		console.log(2, i, Date.now() - t0);
		setTimeout(function () {
			expect(i).toBe(1);
			console.log(6, i, Date.now() - t0);
			done();
		}, 300);
		console.log(3, i, Date.now() - t0);
		expect(i).toBe(0);
	});
	xit('2 - should understand timers', function (done) {
		var i = 0, t0 = Date.now();
		expect(i).toBe(0);
		console.log(1, i, Date.now() - t0);
		setTimeout(function () {
			i = 1;
			console.log(4, i, Date.now() - t0);
		}, 0);
		console.log(2, i, Date.now() - t0);
		expect(i).toBe(0);
		setTimeout(function () {
			expect(i).toBe(1);
			console.log(5, i, Date.now() - t0);
			done();
		}, 1);
		console.log(3, i, Date.now() - t0);
		expect(i).toBe(0);
	});
	xit('3 - should understand timers', function (done) {
		var i = 0, loopDueTime = Date.now() + 1000;
        console.log(new Date().getTime() + ' scheduling no done');
		setTimeout(function () {
            console.log(new Date().getTime() + ' no done');
			i = 1;
		}, 300);
		while (new Date().getTime() <= loopDueTime) {
		}
		expect(i).toBe(0);
        console.log(new Date().getTime() + ' scheduling with done');
		setTimeout(function () {
            console.log(new Date().getTime() + ' with done');
			expect(i).toBe(1);
			done();
		}, 0);
		expect(i).toBe(0);
	});
});
*/
describe('Closure', function (done) {
	'use strict';
	it('1 - should understand loop and closure', function (done) {
        expect(1).toBe(2);
		var i, debugElement = jQuery('#debug');
		debugElement.text('');
		for (i = 0; i < 3; i += 1) {
			setTimeout(function () {
				debugElement.append(i);
			}, 1000 * (i + 1));
		}
		setTimeout(function () {
			expect(debugElement.text()).toBe('222');
			done();
			//discuss this with your pair
			//now change the code within setTimeout (and within setTimeout only) so that expected result is '123'
		}, 4000);
	});
});
