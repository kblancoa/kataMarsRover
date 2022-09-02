import { Obstacle } from './Obstacle';

/**
 * Entity Rover robot
 */

export class Planet {
  constructor(private radio: number = 5, obstacles: Obstacle[] = []) {}
}
