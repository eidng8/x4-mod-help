/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

type TWalkCallback = (
  err: NodeJS.ErrnoException | null,
  files?: string[],
) => void;

export default class Utils {
  private constructor() {
  }
}
