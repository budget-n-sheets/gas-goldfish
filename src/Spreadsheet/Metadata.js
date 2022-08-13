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

class Metadata {
  constructor (item) {
    this._item = item;
  }

  get_ (key) {
    return this._item
      .createDeveloperMetadataFinder()
      .withVisibility(SpreadsheetApp.DeveloperMetadataVisibility.PROJECT)
      .withKey(key)
      .find();
  }

  get (key) {
    const a = this.get_(key);
    return a.length > 0 ? a[0].getValue() : null;
  }

  remove (key) {
    this.get_(key).forEach(m => m.remove());
    return this;
  }

  removeAll () {
    this._item
      .createDeveloperMetadataFinder()
      .withVisibility(SpreadsheetApp.DeveloperMetadataVisibility.PROJECT)
      .find()
      .forEach(m => m.remove());
    return this;
  }

  set (key, value) {
    const a = this.get_(key);
    if (a.length > 0) a.forEach(m => m.remove());
    this._item
      .addDeveloperMetadata(
        key, JSON.stringify(value),
        SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);
    return this;
  }
}
