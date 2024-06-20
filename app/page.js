import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="/week-2">Link: Week 2 Assignment</Link></li>
        <li><Link href="/week-3">Link: Week 3 Assignment</Link></li>
        <li><Link href="/week-4">Link: Week 4 Assignment</Link></li>
      </ul>
    </main>
  );
}
