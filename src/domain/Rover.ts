/**
 * Entity Rover robot thas is supposes at square
 * Size is 1
 *
 */
import Coordinates from "./Coordinates";
import Orientation from "./Orientation";
import Direction from "./Direction";




export default class Rover {
  constructor(
    private position: Coordinates = new Coordinates(),
    private orientation: Orientation = Orientation.North,
    private size: number = 1,
  ) {}

  move(direction: Direction): Rover {

    const movementOrientation = this.orientation === Orientation.North ? 1: -1
    const movementDirection = direction === Direction.Backward ? -1:1
    this.position = new Coordinates(0,
      movementDirection * movementOrientation);
    return this;
  }
  getPosition(): Coordinates {
    return this.position;
  }
  getOrientation(): Orientation {
    return this.orientation;
  }
}
