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

class Cached {
  constructor (cache, properties) {
    this._cache = cache;
    this._properties = properties;
  }

  get (key) {
    return this._cache.get(key) ?? (() => {
      const value = this._properties.getProperty(key);
      this._cache.put(key, value);
      return value;
    })();
  }

  remove (key) {
    this._properties.deleteProperty(key);
    this._cache.remove(key);
  }

  update (key, value) {
    this._properties.setProperty(key, value);
    this._cache.put(key, value);
  }
}
