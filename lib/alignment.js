/**
 * Represents column alignment.
 *
 * - `Alignment.DEFAULT` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 * @type {Object}
 */
export const Alignment = Object.freeze({
  DEFAULT: "default",
  LEFT   : "left",
  RIGHT  : "right",
  CENTER : "center"
});

/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 * @type {Object}
 */
export const DefaultAlignment = Object.freeze({
  LEFT  : Alignment.LEFT,
  RIGHT : Alignment.RIGHT,
  CENTER: Alignment.CENTER
});

/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 * @type {Object}
 */
export const HeaderAlignment = Object.freeze({
  FOLLOW: "follow",
  LEFT  : Alignment.LEFT,
  RIGHT : Alignment.RIGHT,
  CENTER: Alignment.CENTER
});