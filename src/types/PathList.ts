/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

export default interface IPathList {
  name: string;

  path: string;

  children?: IPathList[];
}
