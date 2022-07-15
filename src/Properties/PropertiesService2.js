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

class PropertiesService2 {
  static get _self () {
    return _Goldfish.PropertiesService2;
  }

  static getDocumentProperties () {
    const self = this._self;
    return new Properties2(self.document || (self.document = PropertiesService.getDocumentProperties()));
  }

  static getScriptProperties () {
    const self = this._self;
    return new Properties2(self.script || (self.script = PropertiesService.getScriptProperties()));
  }

  static getUserProperties () {
    const self = this._self;
    return new Properties2(self.user || (self.user = PropertiesService.getUserProperties()));
  }
}
