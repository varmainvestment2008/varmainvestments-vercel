#!/usr/bin/env node

/**
 * Password Hash Generator for Admin Panel
 * 
 * Usage: node generate-password-hash.js yourNewPassword
 * 
 * This script generates a SHA-256 hash of your password
 * Copy the hash and update ADMIN_PASSWORD_HASH in client/src/pages/AdminLogin.tsx
 */

const crypto = require('crypto');

const password = process.argv[2];

if (!password) {
  console.error('\n❌ Error: No password provided\n');
  console.log('Usage: node generate-password-hash.js yourNewPassword\n');
  console.log('Example: node generate-password-hash.js MySecurePass123\n');
  process.exit(1);
}

// Generate SHA-256 hash
const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log('\n✅ Password hash generated successfully!\n');
console.log('━'.repeat(80));
console.log(`Password: ${password}`);
console.log(`Hash:     ${hash}`);
console.log('━'.repeat(80));
console.log('\nTo update your admin password:');
console.log('1. Open: client/src/pages/AdminLogin.tsx');
console.log('2. Find the line: const ADMIN_PASSWORD_HASH = "..."');
console.log('3. Replace the hash with the one above');
console.log('4. Update the comment to show your new password\n');
console.log('Your password is now secure and hidden from the code! 🔒\n');
