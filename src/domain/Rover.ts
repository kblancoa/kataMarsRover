/**
 * Entity Rover robot thas is supposes at square
 * Size is 1
 *
 */

class Rover {
  constructor(
    private position: Coordinates = new Coordinates(),
    private orientation: string = 'N',
    private size: number = 1,
  ) {}
}
