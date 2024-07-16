import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const rolesBase = [{ name: 'admin' }, { name: 'employees' }];

const userAdmin = {
  name: 'Admin',
  email: 'admin@mscontrol.com.br',
  password: 'senha123',
};

async function execute(prisma: PrismaClient) {
  //create roles
  await Promise.all(
    rolesBase.map((role) => {
      return prisma.role.upsert({
        where: {
          name: role.name,
        },
        create: {
          name: role.name,
        },
        update: {},
      });
    }),
  );

  //create admin user
  const userAdminCreated = await prisma.user.upsert({
    where: {
      email: userAdmin.email,
    },
    create: {
      ...userAdmin,
      password: await bcrypt.hash(userAdmin.password, 10),
    },
    update: {},
  });

  //find role admin
  const roleAdmin = await prisma.role.findFirst({
    where: {
      name: 'admin',
    },
  });

  //connect user with role
  await prisma.user.update({
    where: {
      uid: userAdminCreated.uid,
    },
    data: {
      roles: {
        connect: {
          uid: roleAdmin.uid,
        },
      },
    },
    include: { roles: true },
  });
}

export async function seed(prisma: PrismaClient) {
  try {
    await execute(prisma);
    console.log('✅  seed executed. 🫡');
  } catch (error) {
    console.error(error);
    console.log('❌ Error while seeding: ');
  }
}
