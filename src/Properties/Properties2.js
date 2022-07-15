/**
 * GAS Goldfish
 * Copyright (C) 2022 Guilherme T Maeoka
 * <https://github.com/guimspace/gas-goldfish>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

class Properties2 {
  constructor (properties) {
    this._self = properties;
  }

  deleteAllProperties () {
    this._self.deleteAllProperties();
  }

  deleteProperty (key) {
    this._self.deleteProperty(key);
  }

  getProperty (key) {
    return JSON.parse(this._self.getProperty(key));
  }

  getProperties () {
    const all = this._self.getProperties();
    for (const key in all) {
      all[key] = JSON.parse(all[key]);
    }
    return all;
  }

  setProperties (values, deleteAllOthers = false) {
    const pairs = Object.assign({}, values);
    for (const key in pairs) {
      pairs[key] = JSON.stringify(pairs[key]);
    }
    this._self.setProperties(pairs, !!deleteAllOthers);
  }

  setProperty (key, value) {
    this._self.setProperty(key, JSON.stringify(value));
  }
}
