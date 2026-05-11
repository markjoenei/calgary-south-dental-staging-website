const fs = require('fs');
const d = 'C:\\Users\\markj\\Desktop\\Claude-Projects\\Done Claude Ai Dental Websites\\calgary-south-dental-ai-website\\.tasks\\clone-royalbaydentalco\\screenshots';
try {
  const files = fs.readdirSync(d).sort();
  console.log('Count: ' + files.length);
  files.forEach(f => console.log(f));
} catch(e) {
  console.error('Error: ' + e.message);
  // Try to list the parent
  const parent = 'C:\\Users\\markj\\Desktop\\Claude-Projects\\Done Claude Ai Dental Websites\\calgary-south-dental-ai-website\\.tasks';
  try {
    console.log('Parent contents: ' + fs.readdirSync(parent).join(', '));
  } catch(e2) {
    console.error('Parent error: ' + e2.message);
  }
}
