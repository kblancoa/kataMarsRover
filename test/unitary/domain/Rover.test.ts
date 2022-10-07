import Rover from '../../../src/domain/Rover';
import Coordinates from '../../../src/domain/Coordinates';
import Orientation from '../../../src/domain/Orientation';
import Direction from '../../../src/domain/Direction';

describe('Rover tests', () => {
  it('should move to position (O,1) when rover is in position (0,0) and oriented north, and it moves forward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.North, 1);
    rover.move(Direction.Forward);

    expect(rover.getPosition()).toEqual(new Coordinates(0, 1));
    expect(rover.getOrientation()).toEqual(Orientation.North);
  });

  it('should move to position (O,-1) when rover is in position (0,0) and oriented north, and it moves backward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.North, 1);
    rover.move(Direction.Backward);
    expect(rover.getPosition()).toEqual(new Coordinates(0, -1));
    expect(rover.getOrientation()).toEqual(Orientation.North);
  });

  it('should move to position (O,-1) when rover is in position (0,0) and oriented south, and it moves forward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.South, 1);
    rover.move(Direction.Forward);
    expect(rover.getPosition()).toEqual(new Coordinates(0, -1));
    expect(rover.getOrientation()).toEqual(Orientation.South);
  });

  it('should move to position (O,1) when rover is in position (0,0) and oriented south, and it moves backward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.South, 1);
    rover.move(Direction.Backward);
    expect(rover.getPosition()).toEqual(new Coordinates(0, 1));
    expect(rover.getOrientation()).toEqual(Orientation.South);
  });

  /*
  it('Turn Rover right', () => {});

  it('Turn Rover left', () => {});
  */
});
