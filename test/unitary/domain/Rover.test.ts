import { Coordinates } from '../../../src/domain/Coordinates';
import { Orientation } from '../../../src/domain/Orientation';
import { Rover } from '../../../src/domain/Rover';
import { Direction } from '../../../src/domain/Direction';

let rover: Rover;

beforeEach(() => {
  rover = new Rover(new Coordinates(0, 0), Orientation.North, 1);
});

describe('Rover tests', () => {
  it('should move to position (O,1) when rover is in position (0,0) and oriented north, and it moves forward', () => {
    rover.move(Direction.Forward);

    expect(rover.getPosition()).toEqual(new Coordinates(0, 1));
    expect(rover.getOrientation()).toEqual(Orientation.North);
  });

  /*
  it('Move Rover backward', () => {});

  it('Turn Rover right', () => {});

  it('Turn Rover left', () => {});
  */
});
