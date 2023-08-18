import { NextResponse } from "next/server";
import { fakerPT_BR as faker } from "@faker-js/faker";

export async function GET() {
  const feedItems = [...new Array(5)].map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.words(),
      author: faker.person.fullName(),
      url: faker.internet.url(),
      cover: faker.image.urlLoremFlickr({
        width: 200,
        height: 300,
        category: "book",
      }),
      progress: Math.floor(Math.random() * 100),
    };
  });

  return NextResponse.json(feedItems);
}
