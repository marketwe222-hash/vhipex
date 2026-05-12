import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@vhipex.edu" },
    update: {},
    create: {
      email: "admin@vhipex.edu",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("✅ Admin created:", admin.email);

  // Sample student
  const studentPassword = await bcrypt.hash("student123", 12);
  const studentUser = await prisma.user.upsert({
    where: { email: "student@vhipex.edu" },
    update: {},
    create: {
      email: "student@vhipex.edu",
      password: studentPassword,
      role: "STUDENT",
      student: {
        create: {
          studentId: "VHX-2024-001",
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: new Date("2008-05-15"),
          gender: "Male",
          class: "Form 5A",
          department: "Science",
        },
      },
    },
    include: { student: true },
  });
  console.log("✅ Student created:", studentUser.email);

  // Sample news
  await prisma.news.upsert({
    where: { slug: "welcome-2025" },
    update: {},
    create: {
      title: "Welcome to the 2024/2025 Academic Year",
      slug: "welcome-2025",
      excerpt: "We are excited to begin a new academic year.",
      content: "Full content here...",
      status: "PUBLISHED",
      publishedAt: new Date(),
      category: "Announcements",
      tags: ["academic", "welcome"],
    },
  });
  console.log("✅ Sample news seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
