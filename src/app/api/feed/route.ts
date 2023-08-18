import { NextResponse } from "next/server";
import { fakerPT_BR as faker } from "@faker-js/faker";

export async function GET() {
  const feedItems = [...new Array(10)].map(() => {
    return {
      id: faker.string.uuid(),
      message: faker.lorem.paragraph(),
      createdAt: faker.date.recent(),
      user: {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      },
      book: {
        id: faker.string.uuid(),
        title: faker.lorem.words(),
        author: faker.person.fullName(),
        url: faker.internet.url(),
      },
    };
  });

  return NextResponse.json(feedItems);
}
