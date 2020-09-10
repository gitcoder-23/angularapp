import * as SettingsActions from './settings.actions';

describe('Settings', () => {
  it('should create an instance', () => {
    expect(SettingsActions.loadSettings()).toBeTruthy();
  });
});
