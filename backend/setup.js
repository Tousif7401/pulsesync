#!/usr/bin/env node

/**
 * DevSync AI Setup Script
 * Helps with initial database setup and environment configuration
 */

import readline from 'readline';
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function printHeader(text) {
  console.log('\n' + '='.repeat(50));
  console.log(`  ${text}`);
  console.log('='.repeat(50) + '\n');
}

function printSuccess(text) {
  console.log(`✅ ${text}`);
}

function printError(text) {
  console.log(`❌ ${text}`);
}

function printInfo(text) {
  console.log(`ℹ️  ${text}`);
}

async function checkPostgres() {
  printHeader('Checking PostgreSQL');

  try {
    execSync('pg_isready', { stdio: 'ignore' });
    printSuccess('PostgreSQL is running');
    return true;
  } catch {
    printError('PostgreSQL is not running');
    printInfo('Start PostgreSQL with: brew services start postgresql');
    return false;
  }
}

async function setupDatabase() {
  printHeader('Database Setup');

  const dbName = await question('Database name (devsync): ') || 'devsync';
  const dbUser = await question('Database user (postgres): ') || 'postgres';

  printInfo(`Creating database "${dbName}"...`);

  try {
    execSync(`createdb -U ${dbUser} ${dbName}`, { stdio: 'ignore' });
    printSuccess(`Database "${dbName}" created`);
  } catch {
    printInfo(`Database "${dbName}" may already exist`);
  }
}

async function setupEnvFile() {
  printHeader('Environment Configuration');

  const envPath = join(__dirname, '.env');

  if (existsSync(envPath)) {
    const overwrite = await question('.env file exists. Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      printInfo('Keeping existing .env file');
      return;
    }
  }

  const geminiKey = await question('Enter your Gemini API key: ');
  const dbPassword = await question('Enter your PostgreSQL password (leave empty if no password): ');

  const envContent = `# Server
PORT=5000
NODE_ENV=development

# Gemini AI
GEMINI_API_KEY=${geminiKey}

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=devsync
DB_USER=postgres
DB_PASSWORD=${dbPassword}

# GitHub Webhook Secret (optional)
GITHUB_WEBHOOK_SECRET=
`;

  writeFileSync(envPath, envContent);
  printSuccess('.env file created');
}

async function installDependencies() {
  printHeader('Installing Dependencies');

  try {
    printInfo('Running npm install...');
    execSync('npm install', { stdio: 'inherit' });
    printSuccess('Dependencies installed');
  } catch {
    printError('Failed to install dependencies');
    return false;
  }
  return true;
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════╗');
  console.log('║       🔧 DevSync AI Backend Setup               ║');
  console.log('╚════════════════════════════════════════════════╝');

  try {
    // Check PostgreSQL
    const postgresRunning = await checkPostgres();
    if (!postgresRunning) {
      printError('Please start PostgreSQL and run this script again');
      rl.close();
      return;
    }

    // Setup database
    const setupDb = await question('Create database now? (Y/n): ');
    if (setupDb.toLowerCase() !== 'n') {
      await setupDatabase();
    }

    // Setup .env
    const setupEnv = await question('Setup .env file now? (Y/n): ');
    if (setupEnv.toLowerCase() !== 'n') {
      await setupEnvFile();
    }

    // Install dependencies
    const installDeps = await question('Install dependencies now? (Y/n): ');
    if (installDeps.toLowerCase() !== 'n') {
      await installDependencies();
    }

    printHeader('Setup Complete! 🎉');
    printInfo('Next steps:');
    console.log('  1. Update .env with your Gemini API key');
    console.log('  2. Run: npm start');
    console.log('  3. Test: curl http://localhost:5000/health');
    console.log('\nFor webhook testing, use ngrok:');
    console.log('  ngrok http 5000');

  } catch (error) {
    printError(`Setup failed: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
