// server.js
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// Boots the Next standalone server produced by `output: 'standalone'`
require('./.next/standalone/server.js');