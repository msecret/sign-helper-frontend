
import { Color } from './color';
import { Guid } from './guid';

const PLACEHOLDER_IMG_URL = 'http://placehoder.jpg';

enum Orientation {
  horizontal = 1,
  vertical
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createDisplayName(name : string) {
  return capitalizeFirstLetter(name.replace('_', ' '));
}

export class Sign {
  guid: Guid;
  name: string;
  displayName: string;
  orientation: Orientation;
  backgroundColor: Color;
  unformattedText: string;
  tags: string[];
  imageUrlSmall: string;

  constructor(
      name : string,
      displayName? : string,
      orientation? : Orientation,
      backgroundColor? : Color,
      unformattedText : string = '',
      tags : string[] = [],
      imageUrlSmall : string = PLACEHOLDER_IMG_URL) {

    this.guid = Guid.getNewGuid();
    this.name = name;
    this.displayName = displayName || createDisplayName(name);
    this.orientation = orientation || Orientation.horizontal;
    this.backgroundColor = backgroundColor || new Color('ffffff');
    this.unformattedText = unformattedText;
    this.tags = tags;
    this.imageUrlSmall = imageUrlSmall;
  }
}
