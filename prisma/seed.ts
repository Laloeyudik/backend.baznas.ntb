import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
//    await prisma.admin.create({
//     data: {
//         name: "baznas",
//         email: "baznas@prov.ntb",
//         password: "@baznas"
//     }
//   });
   await prisma.contributor.create({
    data: {
        name: "Zis",
        position: "Bidang Zis",
        email: "zis@baznas.prov.ntb",
        password: "@zis"
    }
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
