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

class CacheService2 {
  static get _self () {
    return _Goldfish.CacheService2;
  }

  static getDocumentCache () {
    const self = this._self;
    return new Cache2(self.document || (self.document = CacheService.getDocumentCache()));
  }

  static getScriptCache () {
    const self = this._self;
    return new Cache2(self.script || (self.script = CacheService.getScriptCache()));
  }

  static getUserCache () {
    const self = this._self;
    return new Cache2(self.user || (self.user = CacheService.getUserCache()));
  }
}
