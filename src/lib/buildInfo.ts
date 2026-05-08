const commitSha =
  process.env.NEXT_PUBLIC_BUILD_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  "";

export const BUILD_COMMIT_SHA = commitSha;
export const BUILD_COMMIT_LABEL = commitSha ? `commit ${commitSha.slice(0, 7)}` : "commit local";
