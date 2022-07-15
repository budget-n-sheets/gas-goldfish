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

class SpreadsheetApp2 {
  static get _self () {
    return _Goldfish.SpreadsheetApp2;
  }

  static getActive () {
    const self = this._self;
    if (!self.spreadsheet) {
      self.spreadsheet = new Spreadsheet2(SpreadsheetApp.getActive());
      self.ids[self.spreadsheet.getId()] = self.spreadsheet;
    }
    return self.spreadsheet;
  }

  static getUi () {
    return this._self.ui || (this._self.ui = SpreadsheetApp.getUi());
  }

  static open (file) {
    const spreadsheet = SpreadsheetApp.open(file);
    return (this._self.ids[spreadsheet.getId()] = new Spreadsheet2(spreadsheet));
  }

  static openById (id) {
    return this._self.ids[id] || (this._self.ids[id] = new Spreadsheet2(SpreadsheetApp.openById(id)));
  }

  static openByUrl (url) {
    const spreadsheet = SpreadsheetApp.openByUrl(url);
    return (this._self.ids[spreadsheet.getId()] = new Spreadsheet2(spreadsheet));
  }
}
