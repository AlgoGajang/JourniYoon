/**
 * @typedef {Object} PackageJson
 * @property {string} name
 * @property {string} version
 * @property {Record<string, string>} dependencies
 *
 * @param {PackageJson} packageJson
 * @param {(name: string) => Promise<string[]>} fetchVersions
 * @param {(name: string, version: string) => Promise<PackageJson>} fetchPackageJson
 * @returns {Promise<string[]>}
 */
async function solution(packageJson, fetchVersions, fetchPackageJson) {
  return [];
}
