/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

export default interface IMenuItem {
  key: string;

  name: string;

  children?: IMenuItem[];
}
