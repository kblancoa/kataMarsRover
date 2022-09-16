/**
 * Entity Obstacle robot
 * Size is always 1
 * Obstacle is always a square
 */
import Coordinates from "@/domain/Coordinates";


export default class Obstacle {
  constructor(
    private position: Coordinates = new Coordinates(),
    private size: number = 1,
  ) {}
}
