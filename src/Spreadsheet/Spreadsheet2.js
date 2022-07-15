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

class Spreadsheet2 {
  constructor (spreadsheet) {
    this._self = spreadsheet;
    this._sheets = {};

    this.id = spreadsheet.getId();
  }

  copySheetsFrom (spreadsheet, names) {
    names.forEach(name => {
      spreadsheet.getSheetByName(name)
        .copyTo(this._self)
        .setName(name);
    });
  }

  deleteAllSheets () {
    this._self.insertSheet();
    this._self.getSheets().forEach(sheet => this._self.deleteSheet(sheet));
    this._sheets = {};
  }

  getId () {
    return this.id;
  }

  getSheetByName (name) {
    if (!this._sheets[name]) return (this._sheets[name] = this._self.getSheetByName(name));
    try {
      this._sheets[name].getName();
    } catch (err) {
      this._sheets[name] = this._self.getSheetByName(name);
    }
    return this._sheets[name];
  }

  removeAllMetadata () {
    this._self
      .createDeveloperMetadataFinder()
      .withVisibility(SpreadsheetApp.DeveloperMetadataVisibility.PROJECT)
      .find()
      .forEach(m => m.remove());
  }
}
