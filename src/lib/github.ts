import { siteConfig } from "@/config/nav";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  total: number;
  weeks: ContributionDay[][];
};

export function getGithubUsername(): string {
  const parts = new URL(siteConfig.githubUrl).pathname
    .split("/")
    .filter(Boolean);
  return parts[0] ?? "";
}

const LEVELS: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays { date contributionCount contributionLevel }
        }
      }
    }
  }
}`;

type ApiDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
};

// Server only. Returns null when the token is missing or the request fails.
export async function getContributions(): Promise<Contributions | null> {
  const token = process.env.GITHUB_TOKEN;
  const login = getGithubUsername();
  if (!token || !login) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const cal =
      json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal || !Array.isArray(cal.weeks)) return null;

    return {
      total: cal.totalContributions as number,
      weeks: cal.weeks.map((w: { contributionDays: ApiDay[] }) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel] ?? 0,
        })),
      ),
    };
  } catch {
    return null;
  }
}
