Travis says: 
[![Build Status](https://travis-ci.com/mastilnicata/mastilnicata.github.io.svg?branch=work)]((https://travis-ci.com/github/mastilnicata/mastilnicata.github.io)





To run locally:

Run in one terminal
```
npx netlify-cms-proxy-server
```

admin/config.yml should contain
```
backend:
  name: git-gateway

local_backend: true
```

npx netlify-cms-proxy-server & bundle exec jekyll serve --incremental
