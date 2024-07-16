import { Command } from 'commander';

import { PrismaClient } from '@prisma/client';
import { seed } from './seed';

const program = new Command();

program
  .command('seed')
  .description('Seed database')
  .action(async () => {
    const prisma = new PrismaClient();
    try {
      await seed(prisma);
    } catch {
    } finally {
      await prisma.$disconnect();
    }
  });

// se não passar nenhum comando exibe a ajuda
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
