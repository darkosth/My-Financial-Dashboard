const commitSha =
  process.env.NEXT_PUBLIC_BUILD_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  "";
const shouldShowBuildBadge = process.env.VERCEL_ENV === "preview";

export const BUILD_COMMIT_SHA = shouldShowBuildBadge ? commitSha : null;
export const BUILD_COMMIT_LABEL = shouldShowBuildBadge ? (commitSha ? `commit ${commitSha.slice(0, 7)}` : "commit local") : null;
