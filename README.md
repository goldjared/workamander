# workamander

The programmers' friend. Set custom timed reminders for breaks.

Objective
Workamander will be a customizable time tracker, with the main goal being to alert the user at a certain interval(s).
This interval(s) will be customizable, and the alert level will be customizable as well.

For example, and we'll say these are default values:
Every 10min-15min a light "chime" sound will fire, this is reminder to check your posture, shake off your hands.
this is not tracked, and this is toggleable.
Every 25min a double "chime" will fire. This means stand up, walk around for a bit. After 5 min, a "ding" will mean resume work.
Every 85min a strong ding for 10 minute break.
After this 10min break, the 85min+10minbreak is logged, the breaks are subtracted from log, and logged themselves.

25
5
25
5
25 (85)
10 minute break.
95 total minute, -20 min in break = 75min total work.
