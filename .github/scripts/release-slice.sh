#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run build

branch="$(git rev-parse --abbrev-ref HEAD | sed 's:/:-:g')"

npm version prerelease \
  --no-git-tag-version \
  --preid="${branch}-${GITHUB_RUN_ID}"

npm publish --tag "${branch}"