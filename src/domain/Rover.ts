/**
 * Entity Rover robot thas is supposes at square
 * Size is 1
 *
 */

import { Coordinates } from './Coordinates';
import { Direction } from './Direction';
import { Orientation } from './Orientation';

export class Rover {
  constructor(
    private position: Coordinates = new Coordinates(),
    private orientation: Orientation = Orientation.North,
    private size: number = 1,
  ) {}

  move(direction: Direction) {
    throw new Error('Method not implemented.');
  }
  getPosition(): Coordinates {
    return this.position;
  }
  getOrientation(): Orientation {
    return this.orientation;
  }
}
