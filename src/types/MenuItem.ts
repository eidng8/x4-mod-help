/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

export interface IMenuItem {
  key: string;

  name: string;

  tags?: ITag[];

  children?: IMenuItem[];
}

export interface ITag {
  key: number | string;

  label: string;
}
