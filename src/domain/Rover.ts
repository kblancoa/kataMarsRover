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
    this.position = new Coordinates(0,1);//this.position;
    return this;
  }
  getPosition(): Coordinates {
    return this.position;
  }
  getOrientation(): Orientation {
    return this.orientation;
  }
}
