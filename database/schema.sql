-- DROP TABLE IF EXISTS Workouts;

CREATE TABLE Workouts (
  Id SERIAL PRIMARY KEY,
  Program VARCHAR(255) NOT NULL,
  AvgMinutes VARCHAR(255),
  Trainer VARCHAR(255) NOT NULL,
  WorkoutType VARCHAR(255) NOT NULL,
  NumberOfWorkouts VARCHAR(255)
)