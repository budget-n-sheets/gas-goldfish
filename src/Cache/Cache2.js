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

class Cache2 {
  constructor (cache) {
    this._self = cache;
  }

  get (key) {
    return JSON.parse(this._self.get(key));
  }

  getAll (keys) {
    const all = this._self.getAll(keys);
    for (const key in all) {
      all[key] = JSON.parse(all[key]);
    }
    return all;
  }

  put (key, value, expiration = 600) {
    this._self.put(key, JSON.stringify(value), expiration);
  }

  putAll (values, expirationInSeconds = 600) {
    const pairs = Object.assign({}, values);
    for (const key in pairs) {
      pairs[key] = JSON.stringify(pairs[key]);
    }
    this._self.putAll(pairs, expirationInSeconds);
  }

  remove (key) {
    this._self.remove(key);
  }

  removeAll (keys) {
    this._self.removeAll(keys);
  }
}
