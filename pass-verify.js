const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202s';
  const hash = '$2b$10$Ey1A5O9/V3WrmE.kE0dC2.NS1q19jJZO00nnzx5WNhUpoJL/Vg3aW';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
