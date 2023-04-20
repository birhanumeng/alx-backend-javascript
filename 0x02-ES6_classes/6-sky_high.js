import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super.Building(sqft);
    this._floor = floor;
  }

  get sqft() {
    return this._sqft;
  }

  get floor() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
