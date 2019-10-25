"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgradeLogic = upgradeLogic;

/**
 * 返回是否要强制更新
 * @param {*} projPackageJson 
 * @param {*} kitPackageJson 
 */
function upgradeLogic(projPackageJson, kitPackageJson) {
  console.log("远端包的执行：");
  console.log(projPackageJson);
  console.log(kitPackageJson);
  return true;
}