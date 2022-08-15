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

class Settings {
  static get _settings () {
    return this.fish_()[this._key] ??
          (this.fish_()[this._key] = this.cache_().get(this._key));
  }

  static fish_ () {
    return _Goldfish.Settings[this._scope];
  }

  static cache_ () {
    if (this._scope === 'document') return CachedProperties.withDocument();
    if (this._scope === 'script') return CachedProperties.withScript();
    if (this._scope === 'user') return CachedProperties.withUser();
    throw new Error('Invalid scope.');
  }

  static get (key) {
    return this._settings[key];
  }

  static getAll (keys = null) {
    if (!keys) return Object.assign({}, this._settings);
    const all = {};
    keys.forEach(k => all[k] = this._settings[k]);
    return all;
  }

  static set (key, value) {
    if (this?._config.protect) return;
    this._settings[key] = value;
    this.cache_().update(this._key, this._settings);
    return this;
  }

  static setAll (values) {
    if (this?._config.protect) return;
    Object.assign(this._settings, values);
    this.cache_().update(this._key, this._settings);
    return this;
  }
}
