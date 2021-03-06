import { expect } from "chai";

import { Focus } from "../lib/focus.js";

/**
 * @test {Focus}
 */
describe("Focus", () => {
  /**
   * @test {Focus.constructor}
   */
  describe("constructor(row, column, offset)", () => {
    it("should create a new Focus object", () => {
      const focus = new Focus(1, 2, 3);
      expect(focus).to.be.an.instanceOf(Focus);
    });
  });

  /**
   * @test {Focus#row}
   */
  describe("#row", () => {
    it("should get the row of the focused cell", () => {
      const focus = new Focus(1, 2, 3);
      expect(focus.row).to.equal(1);
    });

    it("should be read-only", () => {
      const focus = new Focus(1, 2, 3);
      expect(() => { focus.row = 3; }).to.throw(TypeError);
    });
  });

  /**
   * @test {Focus#column}
   */
  describe("#column", () => {
    it("should get the column of the focused cell", () => {
      const focus = new Focus(1, 2, 3);
      expect(focus.column).to.equal(2);
    });

    it("should be read-only", () => {
      const focus = new Focus(1, 2, 3);
      expect(() => { focus.column = 3; }).to.throw(TypeError);
    });
  });

  /**
   * @test {Focus#offset}
   */
  describe("#offset", () => {
    it("should get the raw offset", () => {
      const focus = new Focus(1, 2, 3);
      expect(focus.offset).to.equal(3);
    });

    it("should be read-only", () => {
      const focus = new Focus(1, 2, 3);
      expect(() => { focus.offset = 3; }).to.throw(TypeError);
    });
  });

  /**
   * @test {Focus#posEquals}
   */
  describe("#posEquals(focus)", () => {
    it("should return true if two focuses point the same cell", () => {
      const focus = new Focus(1, 2, 0);
      expect(focus.posEquals(new Focus(1, 2, 0))).to.be.true;
      expect(focus.posEquals(new Focus(1, 2, 3))).to.be.true;
      expect(focus.posEquals(new Focus(1, 3, 0))).to.be.false;
      expect(focus.posEquals(new Focus(3, 2, 0))).to.be.false;
      expect(focus.posEquals(new Focus(3, 4, 0))).to.be.false;
    });
  });

  /**
   * @test {Focus#setRow}
   */
  describe("#setRow(row)", () => {
    it("should create a copy of the focus object by setting its row to the specified value", () => {
      const focus = new Focus(1, 2, 3);
      const copy = focus.setRow(4);
      expect(copy).to.be.an.instanceOf(Focus);
      expect(copy).to.not.equal(focus);
      expect(copy.row).to.equal(4);
      expect(copy.column).to.equal(2);
      expect(copy.offset).to.equal(3);
    });
  });

  /**
   * @test {Focus#setColumn}
   */
  describe("#setColumn(row)", () => {
    it("should create a copy of the focus object by setting its column to the specified value", () => {
      const focus = new Focus(1, 2, 3);
      const copy = focus.setColumn(4);
      expect(copy).to.be.an.instanceOf(Focus);
      expect(copy).to.not.equal(focus);
      expect(copy.row).to.equal(1);
      expect(copy.column).to.equal(4);
      expect(copy.offset).to.equal(3);
    });
  });

  /**
   * @test {Focus#setOffset}
   */
  describe("#setOffset(row)", () => {
    it("should create a copy of the focus object by setting its offset to the specified value", () => {
      const focus = new Focus(1, 2, 3);
      const copy = focus.setOffset(4);
      expect(copy).to.be.an.instanceOf(Focus);
      expect(copy).to.not.equal(focus);
      expect(copy.row).to.equal(1);
      expect(copy.column).to.equal(2);
      expect(copy.offset).to.equal(4);
    });
  });
});
