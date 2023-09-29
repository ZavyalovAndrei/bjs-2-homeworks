class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(startTime, action) {
		if (!startTime || !action) {
			throw new Error("Отсутствуют обязательные аргументы");
		} else {
			if (this.alarmCollection.find((element) => element.time === startTime)) {
				console.warn("Уже присутствует звонок на это же время");
			}
			this.alarmCollection.push({
				callback: action,
				time: startTime,
				canCall: true,
			});
		}
	}

	removeClock(removingTime) {
		this.alarmCollection = this.alarmCollection.filter(
			(element) => element.time !== removingTime
		);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		function checkAlarm(alarm) {
			console.log(this.getCurrentFormattedTime());
			if (
				alarm.time === this.getCurrentFormattedTime() &&
				alarm.canCall === true
			) {
				alarm.canCall = false;
				alarm.callback();
			}
		}

		if (this.intervalId !== null) {
			return;
		} else {
			this.intervalId = setInterval(
				this.alarmCollection.forEach((element) => checkAlarm.call(this, element)),
				1000
			);
			console.log(this.alarmCollection[0]);
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((element) => (element.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}