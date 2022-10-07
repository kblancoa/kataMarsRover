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

  it('should move to position (1,0) when rover is in position (0,0) and oriented east, and it moves forward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.East, 1);
    rover.move(Direction.Forward);

    expect(rover.getPosition()).toEqual(new Coordinates(1, 0));
    expect(rover.getOrientation()).toEqual(Orientation.East);
  });

  it('should move to position (-1,0) when rover is in position (0,0) and oriented east, and it moves backward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.East, 1);
    rover.move(Direction.Backward);
    expect(rover.getPosition()).toEqual(new Coordinates(-1, 0));
    expect(rover.getOrientation()).toEqual(Orientation.East);
  });

  it('should move to position (-1,0) when rover is in position (0,0) and oriented west, and it moves forward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.West, 1);
    rover.move(Direction.Forward);
    expect(rover.getPosition()).toEqual(new Coordinates(-1, 0));
    expect(rover.getOrientation()).toEqual(Orientation.West);
  });

  it('should move to position (1,0) when rover is in position (0,0) and oriented west, and it moves backward', () => {
    const rover: Rover = new Rover(new Coordinates(0, 0), Orientation.West, 1);
    rover.move(Direction.Backward);
    expect(rover.getPosition()).toEqual(new Coordinates(1, 0));
    expect(rover.getOrientation()).toEqual(Orientation.West);
  });

  /*
  it('Turn Rover right', () => {});

  it('Turn Rover left', () => {});
  */
});
