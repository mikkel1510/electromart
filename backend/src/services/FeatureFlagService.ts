class FeatureFlagService {
  private flags = {
    unfinishedFeature: false
  };

  isEnabled(flag: keyof typeof this.flags) {
    return this.flags[flag];
  }

  set(flag: keyof typeof this.flags, value: boolean) {
    this.flags[flag] = value;
  }
}

export const featureFlags = new FeatureFlagService();