import Rover from '../../../src/domain/Rover';
import Coordinates from '../../../src/domain/Coordinates';
import Orientation from '../../../src/domain/Orientation';
import Direction from '../../../src/domain/Direction';
import Turn from '../../../src/domain/Turn';

const moveTestCases = [
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.North,
    direction: Direction.Forward,
    finalPostition: new Coordinates(0, 1),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.North,
    direction: Direction.Backward,
    finalPostition: new Coordinates(0, -1),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.South,
    direction: Direction.Forward,
    finalPostition: new Coordinates(0, -1),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.South,
    direction: Direction.Backward,
    finalPostition: new Coordinates(0, 1),
  },

  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.East,
    direction: Direction.Forward,
    finalPostition: new Coordinates(1, 0),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.East,
    direction: Direction.Backward,
    finalPostition: new Coordinates(-1, 0),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.West,
    direction: Direction.Forward,
    finalPostition: new Coordinates(-1, 0),
  },
  {
    initialPosition: new Coordinates(0, 0),
    orientation: Orientation.West,
    direction: Direction.Backward,
    finalPostition: new Coordinates(1, 0),
  },

  {
    initialPosition: new Coordinates(1, 1),
    orientation: Orientation.North,
    direction: Direction.Forward,
    finalPostition: new Coordinates(1, 2),
  },
  {
    initialPosition: new Coordinates(1, 1),
    orientation: Orientation.East,
    direction: Direction.Forward,
    finalPostition: new Coordinates(2, 1),
  },
];
test.each(moveTestCases)(
  'should move to position $finalPostition when rover is in position $initialPosition and oriented $orientation, and it moves $direction',
  ({ initialPosition, orientation, direction, finalPostition }) => {
    const rover: Rover = new Rover(initialPosition, orientation, 1);
    rover.move(direction);
    expect(rover.getPosition()).toEqual(finalPostition);
    expect(rover.getOrientation()).toEqual(orientation);
  },
);

const turnTestCases = [
  {
    initialOrientation: Orientation.North,
    turn: Turn.Right,
    finalOrientation: Orientation.East,
  },
];
test.each(turnTestCases)(
  'should turn to orientation $finalOrientation when rover is turning $turn and oriented $initialOrientation, and final postion is equal to inital position',
  ({ initialOrientation, turn, finalOrientation }) => {
    const initialPosition = new Coordinates(0, 0);
    const rover: Rover = new Rover(initialPosition, initialOrientation, 1);
    rover.turn(turn);
    expect(rover.getPosition()).toEqual(initialPosition);
    expect(rover.getOrientation()).toEqual(finalOrientation);
  },
);
