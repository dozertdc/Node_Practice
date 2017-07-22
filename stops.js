var route1 = {
	stop1: {
		name: route1,
		stopsFromMain: 6
	},
	stop2: {
		name: route1,
		stopsFromMain: 5
	}, 
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop4: {
		name: route1,
		stopsFromMain: 3
	},
	stop5: {
		name: route1,
		stopsFromMain: 2
	},
	stop6: {
		name: route1,
		stopsFromMain: 1
	},
	main: {
		name: route1,
		stopsFromMain: 0
	},
	stop7: {
		name: route1,
		stopsFromMain: 1
	},
	stop7: {
		name: route1,
		stopsFromMain: 2
	}
};


var route2 = {
	stop1: {
		name: route1,
		stopsFromMain: 6
	},
	stop2: {
		name: route1,
		stopsFromMain: 5
	}, 
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop4: {
		name: route1,
		stopsFromMain: 3
	},
	stop5: {
		name: route1,
		stopsFromMain: 2
	},
	stop6: {
		name: route1,
		stopsFromMain: 1
	},
	main: {
		name: route1,
		stopsFromMain: 0
	},
	stop7: {
		name: route1,
		stopsFromMain: 1
	},
	stop7: {
		name: route1,
		stopsFromMain: 2
	}
};

var route3 = {
	stop1: {
		name: route1,
		stopsFromMain: 6
	},
	stop2: {
		name: route1,
		stopsFromMain: 5
	}, 
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop3: {
		name: route1,
		stopsFromMain: 4
	},
	stop4: {
		name: route1,
		stopsFromMain: 3
	},
	stop5: {
		name: route1,
		stopsFromMain: 2
	},
	stop6: {
		name: route1,
		stopsFromMain: 1
	},
	main: {
		name: route1,
		stopsFromMain: 0
	},
	stop7: {
		name: route1,
		stopsFromMain: 1
	},
	stop7: {
		name: route1,
		stopsFromMain: 2
	}
};

var names = {
    green: {
        routeAndName: route1.Stop1
    },
    red: {
        routeAndName: route2.stop2
    }
}

function howManyStops(stop1, stop2){
	console.log(stop1.stopsFromMain + stop2.stopsFromMain);
}

howManyStops(route1.stop1, route2.stop2);