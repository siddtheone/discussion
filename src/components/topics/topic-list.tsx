import { db } from "@/db";
import PATHS from "@/path";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {topics.map(({ slug, id }) => (
        <div key={id}>
          <Link href={PATHS.topicShow(slug)}>
            <Chip color="warning" variant="shadow">
              {slug}
            </Chip>
          </Link>
        </div>
      ))}
    </div>
  );
}
