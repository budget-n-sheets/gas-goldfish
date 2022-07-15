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

class CachedProperties {
  static get _self () {
    return _Goldfish.CachedProperties;
  }

  static withDocument () {
    const self = this._self;
    return self.document ||
          (self.document = new Cached(CacheService2.getDocumentCache(),
            PropertiesService2.getDocumentProperties()));
  }

  static withScript () {
    const self = this._self;
    return self.script ||
          (self.script = new Cached(CacheService2.getScriptCache(),
            PropertiesService2.getScriptProperties()));
  }

  static withUser () {
    const self = this._self;
    return self.user ||
          (self.user = new Cached(CacheService2.getUserCache(),
            PropertiesService2.getUserProperties()));
  }
}
