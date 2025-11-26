module.exports = {
  apps: [
    {
      name: 'stedfastz-shop',
      script: 'yarn',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      max_restarts: 10,
      min_uptime: '5s',
      env: {
        NODE_ENV: 'production',
      },
      env_file: '.env',
    },
  ],
};