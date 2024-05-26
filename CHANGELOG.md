### Versioning rules used

- MAJOR is incremented when you make incompatible API changes
- MINOR is incremented when you add functionality in a backward-compatible manner
- PATCH is incremented when you make backward-compatible bug fixes

```
0.0.1 === MAJOR.MINOR.PATCH
```

### How to understand the labels used in the file ?

- (release): Previously done work was decorated in wrapper classes. The tested public Api interface has appeared
- (feat): Release of a feature that can be used
- (fix): As a rule, this commit contains something that was able to run in the minimum working version. We still need order and tests, but it already works
- (add): Something new has been added to the project. For example, a library or your own solution
- (clean): It's just putting things in order in the code.
- (rule): A rule that is accepted and must be followed under all circumstances
- (test): Everything related to testing
- (docs): The work that was done to create documentation for the project

## 0.0.1 (2024-05-04)

- (clean): Transferring files to a directory './src' Applying eslint rules ([4da2b70](https://github.com/AvdienkoSergey/design-software/commit/4da2b70fe60effd1bf1efa527737b9ecc8be64ed))
- (test): Added Jest for testing. Configuring the Babbel Configuration([a1cf51d](https://github.com/AvdienkoSergey/design-software/commit/a1cf51dc3b0e66f5ef52e0e3378ed9d44cc1950f))
- (clean): Added Eslint and "use-strict" for all files ([d3f2ce4](https://github.com/AvdienkoSergey/design-software/commit/d3f2ce49085cfe0eb121befd5a9eb034fc2e51b5))
- (docs): Added Changelog.md. Updated the class export strategy ([94d9c7e](https://github.com/AvdienkoSergey/design-software/commit/94d9c7effe456a4eb624e6b4929b1eeed4321291))
- (add): Add class ClickListener. Tracking events on Svg-based components ([af050cc](https://github.com/AvdienkoSergey/design-software/commit/af050cc18d89c9e45fdd3bbc2506c8aea605d43e))
- (fix): The project tree is ready to be displayed in Svg format ([73fcc66](https://github.com/AvdienkoSergey/design-software/commit/73fcc66cd179779fb752375c736785a2b14711ee))
- (add): Add decorator classes for working with Svg ([a207227](https://github.com/AvdienkoSergey/design-software/commit/a20722726345d1c6bf929c1cd79acbaf98ee909d))
- (docs): Add license and readme ([df62e4f](https://github.com/AvdienkoSergey/design-software/commit/df62e4f15657c17e11b9183ee0a463ced5f8b0d3))
