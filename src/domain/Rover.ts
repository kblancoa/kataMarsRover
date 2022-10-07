/**
 * Entity Rover robot thas is supposes at square
 * Size is 1
 *
 */
import Coordinates from './Coordinates';
import Orientation from './Orientation';
import Direction from './Direction';
import Turn from './Turn';

export default class Rover {
  constructor(
    private position: Coordinates = new Coordinates(),
    private orientation: Orientation = Orientation.North,
    private size: number = 1,
  ) {}

  move(direction: Direction): Rover {
    const movementOrientation =
      this.orientation === Orientation.North ||
      this.orientation === Orientation.East
        ? 1
        : -1;
    const movementDirection = direction === Direction.Backward ? -1 : 1;
    const movement = movementDirection * movementOrientation;

    if (
      this.orientation === Orientation.North ||
      this.orientation === Orientation.South
    ) {
      this.position = new Coordinates(
        this.position.getX(),
        this.position.getY() + movement,
      );
    } else if (
      this.orientation === Orientation.East ||
      this.orientation === Orientation.West
    ) {
      this.position = new Coordinates(
        this.position.getX() + movement,
        this.position.getY(),
      );
    }

    return this;
  }
  turn(turn: Turn): Rover {
    const rotate = turn === Turn.Right ? 1 : -1;
    const orientations = Object.values(Orientation);
    this.orientation =
      orientations[
        (orientations.indexOf(this.orientation) + rotate) % orientations.length
      ];

    return this;
  }
  getPosition(): Coordinates {
    return this.position;
  }
  getOrientation(): Orientation {
    return this.orientation;
  }
}
