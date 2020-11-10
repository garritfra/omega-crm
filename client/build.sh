# This is the result of a hacky workaround, since for some reason parcel fails at minimizing for production

parcel build \
    --no-minify \
    --no-source-maps \
    --no-autoinstall \
    --no-cache \
        public/index.html

terser \
    --compress \
    --mangle \
    --toplevel \
    -- dist/src.*.js > dist/app.js

sed -E -i="" 's/<script src=\"[\.\/]?\/src\.(.+)\"><\/script>/<script src=\"app\.js\"><\/script>/g' dist/index.html