"use strict";

describe("2-module-2-task", function() {

    it("{} должен вернуть true", function() {
        let obj = {};
        expect(isEmpty(obj)).toEqual(true);
    });

  it("объект со свойством undefined должен считаться не пустым", function() {
    let obj = {
        test: true
    };

    obj.test = undefined;

    expect(isEmpty(obj)).toEqual(false);
  });

  it("объект с удаленным свойством - пустой", function() {
    let obj = {
      test: true
    };

    delete obj.test;

    expect(isEmpty(obj)).toEqual(true);
  });

  it("если у объекта есть хоть одно свойство, то он не пустой", function() {
    let obj = {
      test: true
    };

    expect(isEmpty(obj)).toEqual(false);
  });

});