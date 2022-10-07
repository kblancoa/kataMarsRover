import Rover from '../../../src/domain/Rover';
import Coordinates from '../../../src/domain/Coordinates';
import Orientation from '../../../src/domain/Orientation';
import Direction from '../../../src/domain/Direction';

const testCases = [
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
test.each(testCases)(
  'should move to position $finalPostition when rover is in position $initialPosition and oriented $orientation, and it moves $direction',
  ({ initialPosition, orientation, direction, finalPostition }) => {
    const rover: Rover = new Rover(initialPosition, orientation, 1);
    rover.move(direction);
    expect(rover.getPosition()).toEqual(finalPostition);
    expect(rover.getOrientation()).toEqual(orientation);
  },
);

/*describe('Rover tests', () => {
  it('should move to position (O,1) when rover is in position (0,0) and oriented north, and it moves forward', () => {
    
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
*/
/*
  it('Turn Rover right', () => {});

  it('Turn Rover left', () => {});
  */
