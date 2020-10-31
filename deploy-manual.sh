#!/bin/zsh
scp dist.tar.gz ec2-user@ec2:/home/ec2-user/.
ssh ec2 << EOF
  tar -xzf dist.tar.gz -C .
  sudo rm -rf /srv/angular-map/html/*
  sudo mv dist/* /srv/angular-map/html/
  rm -rf dist dist.tar.gz
EOF

echo "Deploy done! https://www.tonychoucc.com"
