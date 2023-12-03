import fs from 'fs/promises'
import Features from 'config/types/features';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  underline: '\x1b[4m',
  green: '\x1b[32m',
  red: '\x1b[91m',
};

const logFeaturesStatus = async () => { 
  const features = JSON.parse(
    await fs.readFile('./config/features.json', 'utf8'),
  ) as Features
  
  console.log('\n');
  console.log('*'.repeat(50));
  console.log(`${colors.bold}Current features status:${colors.reset}`);
  console.log('*'.repeat(50));
  Object.entries(features).forEach(([category, feature]) => {
    console.log(`\n${colors.underline}Category: ${category}${colors.reset}\n`);
    Object.entries(feature).forEach(([name, status]) => {
      const color = status ? colors.green : colors.red;
      const statusText = status ? 'Active' : 'Inactive';
      console.log(
        `  ${capitalize(name)}: ${color}${statusText}${colors.reset}`,
      );
    });
  });
  console.log('\n' + '*'.repeat(50));
  console.log('\n');
};

export default logFeaturesStatus;
