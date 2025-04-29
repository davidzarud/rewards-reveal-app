#!/bin/sh
echo "Writing runtime config"
cat <<EOF > /usr/share/nginx/html/config.json
{
  "API_BASE_URL": "${API_BASE_URL}"
}
EOF

nginx -g "daemon off;"
