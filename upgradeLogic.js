/**
 * 返回是否要强制更新
 * @param {*} projPackageJson 项目
 * @param {*} kitPackageJson 项目本地的kit
 * @param {*} newKitPackageJson 远端新版kit
 */
function upgradeLogic(projPackageJson,kitPackageJson,newKitPackageJson){
  console.log("远端包的执行：");
  console.log(projPackageJson);
  console.log(kitPackageJson);
  console.log(newKitPackageJson);
  return true;
}