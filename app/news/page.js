import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>news</h1>
      <ul>
        <li>
          <Link href="/news/ai">AI news</Link>
        </li>
        <li>
          <Link href="/news/next">Next.js news</Link>
        </li>
        <li>
          <Link href="/news/react">React.js news</Link>
        </li>
      </ul>
    </>
  );
}
