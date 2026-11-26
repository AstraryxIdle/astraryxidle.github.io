// Public website configuration only. Never add tokens or private project paths here.
export const siteConfig = Object.freeze({
  owner: 'AstraryxIdle',
  repo: 'astraryx-releases',
  // Historical APKs remain available in the original site repository.
  legacyRepo: 'astraryxidle.github.io',
  locale: 'pt-BR',
  siteUrl: 'https://astraryxidle.github.io/',
  // Public GA4 measurement ID. Events are sent only after visitors opt in.
  ga4MeasurementId: 'G-SZHF2LMYG0',
  // These test APKs remain available via the app update feed but not the site download widget.
  excludedReleaseTags: ['v0.8.6.1'],
  // Prefer the APK that the signed update feed serves for this tag.
  releaseApkByTag: Object.freeze({ 'v0.8.7.0': 'Astraryx-Idle-v0.8.7.0-r2.apk', 'v0.8.7.1': 'Astraryx-Idle-v0.8.7.1.apk', 'v0.8.7.2': 'Astraryx-Idle-v0.8.7.2.apk', 'v0.8.7.3': 'Astraryx-Idle-v0.8.7.3.apk' }),
  previewVersion: '0.8.7.3',
  previewStatus: 'published',
  // Resolved against this module directory, so deep pages work in GitHub Pages.
  // The local notes path is used when the published APK matches previewVersion.
  notesPath: 'updates/v0.8.7.3/index.html',
  requestTimeoutMs: 8000,
});
