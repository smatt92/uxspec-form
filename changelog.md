# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,  
and this project adheres to Semantic Versioning.

---

## v0.2.3

### Changed
- Improved README structure and readability for npm
- Clarified mental model and positioning of `uxspec-form`
- Reordered examples to show value faster
- No runtime or API changes

---

## v0.2.2

### Changed
- Minor documentation wording improvements
- Internal cleanup (no public API changes)

---

## v0.2.1

### Changed
- Improved README formatting and npm presentation
- No behavior or API changes

---

## v0.2.0

### Added
- Pure UX decision engine (`resolveUXFieldState`)
- Explicit UX field contracts via `uxField`
- React Hook Form adapter
- Deterministic form phase model (`idle | interacted | submitted`)

### Changed
- UX behavior is field-owned, not form-owned
- Validation timing is explicit (`change | blur | submit`)
- Success feedback requires user interaction

### Fixed
- Premature error visibility
- Inconsistent submit behavior
- Layout shift caused by error rendering

---

## v0.1.x (deprecated)

Initial experimental versions exploring UX-driven form feedback.
